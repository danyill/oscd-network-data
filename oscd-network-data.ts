import { LitElement, TemplateResult, html } from 'lit';
import { property, query } from 'lit/decorators.js';

import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-snackbar';
import '@material/mwc-switch';

import {
  Edit,
  Insert,
  Remove,
  Update,
  newEditEvent,
} from '@openscd/open-scd-core';
import { createElement } from '@openenergytools/scl-lib/dist/foundation/utils';
import type { Snackbar } from '@material/mwc-snackbar';
import { getReference } from '@openenergytools/scl-lib';

// from scl-lib
/** @returns control block or null for a given external reference */
function sourceControlBlock(extRef: Element): Element | null {
  const [iedName, srcLDInst, srcPrefix, srcLNClass, srcLNInst, srcCBName] = [
    'iedName',
    'srcLDInst',
    'srcPrefix',
    'srcLNClass',
    'srcLNInst',
    'srcCBName',
  ].map(attr => extRef.getAttribute(attr) ?? '');

  return (
    Array.from(
      extRef.ownerDocument.querySelectorAll(
        `IED[name="${iedName}"] ReportControl, 
          IED[name="${iedName}"] GSEControl, 
          IED[name="${iedName}"] SampledValueControl`
      )
    ).find(
      cBlock =>
        cBlock.closest('LDevice')!.getAttribute('inst') === srcLDInst &&
        (cBlock.closest('LN, LN0')!.getAttribute('prefix') ?? '') ===
          srcPrefix &&
        cBlock.closest('LN, LN0')!.getAttribute('lnClass') === srcLNClass &&
        cBlock.closest('LN, LN0')!.getAttribute('inst') === srcLNInst &&
        cBlock.getAttribute('name') === srcCBName
    ) ?? null
  );
}

/**
 * Ensures the nearest element is not within a Private element.
 *
 * @param element
 * @returns
 */
export function isPublic(element: Element): boolean {
  return !element.closest('Private');
}

/** @returns the cartesian product of `arrays` */
export function crossProduct<T>(...arrays: T[][]): T[][] {
  return arrays.reduce<T[][]>(
    (a, b) => <T[][]>a.flatMap(d => b.map(e => [d, e].flat())),
    [[]]
  );
}

function getCommAddress(ctrlBlock: Element): Element {
  const doc = ctrlBlock.ownerDocument;

  const ctrlLdInst = ctrlBlock.closest('LDevice')!.getAttribute('inst');
  const addressTag = ctrlBlock.tagName === 'GSEControl' ? 'GSE' : 'SMV';
  const ied = ctrlBlock.closest('IED')!;
  const iedName = ied.getAttribute('name');
  const apName = ctrlBlock.closest('AccessPoint')?.getAttribute('name');

  const cbName = ctrlBlock.getAttribute('name');

  let apNames = [];
  const serverAts = ied.querySelectorAll(
    `AccessPoint > ServerAt[apName="${apName}"`
  );
  if (serverAts) {
    const serverAtNames = Array.from(serverAts).map(ap =>
      ap.closest('AccessPoint')!.getAttribute('name')
    );
    apNames = [apName, ...serverAtNames];
  } else {
    apNames = [apName];
  }

  const connectedAps = `Communication > SubNetwork > ConnectedAP[iedName="${iedName}"]`;
  const connectedApNames = apNames.map(ap => `[apName="${ap}"]`);
  const addressElement = `${addressTag}[ldInst="${ctrlLdInst}"][cbName="${cbName}"]`;

  return doc.querySelector(
    crossProduct([connectedAps], connectedApNames, ['>'], [addressElement])
      .map(strings => strings.join(''))
      .join(',')
  )!;
}

const TPNS = 'https://transpower.co.nz/SCL/SCD/Communication/v1';
const XSINS = 'http://www.w3.org/2001/XMLSchema-instance';

export default class NetworkData extends LitElement {
  /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ attribute: false })
  docName!: string;

  @property({ attribute: false })
  subscriptionCount = 0;

  apCount: number = 0;

  @query('#successMessage')
  successMessage!: Snackbar;

  /**
   * Updates namespaces to include the XML schema instance and the
   * Transpower `etpc` namespaces for writing address elements.
   * @returns
   */
  private updateNamespaces(): Update | undefined {
    const namespaceUpdate: Update = {
      element: this.doc.documentElement,
      attributes: {},
    };

    if (!this.doc.documentElement.hasAttribute('xmlns:etpc'))
      namespaceUpdate.attributes = {
        ...namespaceUpdate.attributes,
        'xmlns:etpc': {
          value: TPNS,
          namespaceURI: 'http://www.w3.org/2000/xmlns/',
        },
      };

    if (!this.doc.documentElement.hasAttribute('xmlns:xsi'))
      namespaceUpdate.attributes = {
        ...namespaceUpdate.attributes,
        'xmlns:xsi': {
          value: XSINS,
          namespaceURI: 'http://www.w3.org/2000/xmlns/',
        },
      };

    if (!(Object.entries(namespaceUpdate.attributes).length === 0))
      return namespaceUpdate;

    return undefined;
  }

  createSubscribedAddressContent(
    address: Element,
    controlBLock: Element
  ): Element | undefined {
    const privateSCL = this.doc.createElementNS(
      this.doc.documentElement.namespaceURI,
      'Private'
    );
    privateSCL.setAttribute('type', `Transpower-${address.tagName}-Subscribe`);

    const iedName = controlBLock.closest('IED')!.getAttribute('name')!;

    privateSCL.setAttributeNS(TPNS, 'iedName', iedName);

    const cbName = controlBLock.getAttribute('name');
    if (cbName) privateSCL.setAttributeNS(TPNS, 'cbName', cbName);

    const ldInst = address.getAttribute('ldInst');
    if (ldInst) privateSCL.setAttributeNS(TPNS, 'ldInst', ldInst);

    const addressVlan = address.querySelector('P[type="VLAN-ID"]');
    if (addressVlan) {
      const vlanId = this.doc.createElementNS(TPNS, 'P');
      vlanId.setAttribute('type', 'VLAN-ID');
      vlanId.setAttributeNS(XSINS, 'type', 'tP_VLAN-ID');
      vlanId.textContent = addressVlan.textContent;
      privateSCL.appendChild(vlanId);
    }

    const addressVlanPriority = address.querySelector(
      'P[type="VLAN-PRIORITY"]'
    );
    if (addressVlanPriority) {
      const vlanPriority = this.doc.createElementNS(TPNS, 'P');
      vlanPriority.setAttribute('type', 'VLAN-PRIORITY');
      vlanPriority.setAttributeNS(XSINS, 'type', 'tP_VLAN-PRIORITY');
      vlanPriority.textContent = addressVlanPriority.textContent;
      privateSCL.appendChild(vlanPriority);
    }

    const addressMac = address.querySelector('P[type="MAC-Address"]');
    if (addressMac) {
      const mac = this.doc.createElementNS(TPNS, 'P');
      mac.setAttribute('type', 'MAC-Address');
      mac.setAttributeNS(XSINS, 'type', 'tP_MAC-Address');
      mac.textContent = addressMac.textContent;
      privateSCL.appendChild(mac);
    }

    // only proceed if there is something to write
    if (!(addressVlan || addressVlanPriority || addressMac)) {
      return privateSCL;
    }
    return undefined;
  }

  /**
   * Removes existing `Private` address elements in preparation for
   * rewriting.
   * @returns Remove edit array.
   */
  removeExistingAddresses(): Remove[] {
    return Array.from(
      this.doc.querySelectorAll(
        'Private[type="Transpower-GSE-Subscribe"], Private[type="Transpower-SMV-Subscribe"]'
      )
    ).map(element => ({ node: element }));
  }

  getCommunicationEdit(
    ap: Element,
    address: Element,
    privateSCL: Element
  ): Insert | undefined {
    const apIedNameRx = ap.closest('IED')!.getAttribute('name');
    const apName = ap.getAttribute('name')!;

    const addressSubNetwork = address.closest('SubNetwork');
    const addressSubNetworkName = addressSubNetwork!.getAttribute('name')!;
    const subNetwork = this.doc.querySelector(
      `:root > Communication > SubNetwork[name="${addressSubNetworkName}"]`
    )!;

    // this plugin relies on there already being some communications
    // and therefore a SubNetwork already existing
    if (!subNetwork) return undefined;

    const connectedAp = subNetwork.querySelector(
      `ConnectedAP[iedName="${apIedNameRx}"][apName="${apName}"]`
    );

    let edit: Insert;

    if (connectedAp) {
      edit = {
        parent: connectedAp,
        node: privateSCL.cloneNode(true),
        reference: getReference(connectedAp, 'Private'),
      };
    } else {
      // create new access point
      const newConnectedAp = createElement(this.doc, 'ConnectedAP', {
        apName,
        iedName: apIedNameRx,
      });
      newConnectedAp.appendChild(privateSCL.cloneNode(true));

      edit = {
        parent: subNetwork,
        node: newConnectedAp,
        reference: getReference(subNetwork, 'ConnectedAP'),
      };
    }
    return edit;
  }

  getControlBlocksByAP(): Map<Element, Element[]> {
    const controlBlocksAndAPs = new Map<Element, Element[]>();

    Array.from(this.doc.querySelectorAll('Inputs > ExtRef'))
      .filter(isPublic)
      .forEach(extRef => {
        const cb = sourceControlBlock(extRef);
        const ap = extRef.closest('AccessPoint')!;

        if (!cb) return;

        // need to store the access points
        const cbAlreadyExists = controlBlocksAndAPs.has(cb);
        const cbHasIed = controlBlocksAndAPs.get(cb)?.includes(ap);

        if (cbAlreadyExists && !cbHasIed) {
          controlBlocksAndAPs.set(cb, [...controlBlocksAndAPs.get(cb)!, ap]);
        } else if (!cbAlreadyExists) {
          controlBlocksAndAPs.set(cb, [ap]);
        }
      });

    // provide stable order -- GOOSE then SV, sorted by IED and control block name
    const sortedControlBlocksAndAPs = new Map(
      [...controlBlocksAndAPs].sort((first, second) => {
        const firstCB = first[0];
        const secondCB = second[0];
        const comparison = (e: Element) =>
          `${e.tagName} ${e
            .closest('IED')!
            .getAttribute('name')} ${e.getAttribute('name')}`;

        return comparison(secondCB).localeCompare(comparison(firstCB));
      })
    );

    // Sort the order access points are processed in
    sortedControlBlocksAndAPs.forEach((aps, cb) => {
      sortedControlBlocksAndAPs.set(cb, aps.sort());
    });

    return sortedControlBlocksAndAPs;
  }

  async run(): Promise<void> {
    // fetch unique control blocks and the connected APs
    const controlBlocksByAP = this.getControlBlocksByAP();

    const edits: Edit[] = [];

    // update namespaces for Transpower and schema instances
    const namespaceUpdate = this.updateNamespaces();

    if (namespaceUpdate) edits.push(namespaceUpdate);

    // remove any existing addresses to allow a complete rewrite
    const removePrivates = this.removeExistingAddresses();

    if (removePrivates) edits.push(...removePrivates);

    this.dispatchEvent(newEditEvent(edits));

    // now build addresses from scratch

    this.subscriptionCount = 0;
    this.apCount = 0;

    let addedSubscriptionCount = 0;
    let apCount = 0;

    controlBlocksByAP.forEach((receivingAccessPoints, cb) => {
      const address = getCommAddress(cb);

      const privateSCL = this.createSubscribedAddressContent(address, cb);

      // If there are no addresses to write move to next control block
      if (!privateSCL) return;

      receivingAccessPoints.forEach(ap => {
        const edit = this.getCommunicationEdit(ap, address, privateSCL);
        apCount += 1;

        if (edit) {
          this.dispatchEvent(newEditEvent(edit));
          addedSubscriptionCount += 1;
        }
      });
    });
    this.subscriptionCount = addedSubscriptionCount;
    this.apCount = apCount;
    this.successMessage.show();
  }

  getEditCount(): number {
    return this.subscriptionCount;
  }

  render(): TemplateResult {
    return html`<mwc-snackbar
      id="successMessage"
      leading
      labelText="Network data updated (${this
        .subscriptionCount} items written to the Communication section for ${this
        .apCount} Access Points)."
    >
    </mwc-snackbar>`;
  }
}
