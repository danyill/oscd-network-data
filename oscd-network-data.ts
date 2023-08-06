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

function getCommAddress(ctrlBlock: Element): Element {
  const doc = ctrlBlock.ownerDocument;

  const ctrlLdInst = ctrlBlock.closest('LDevice')!.getAttribute('inst');
  const addressTag = ctrlBlock.tagName === 'GSEControl' ? 'GSE' : 'SMV';
  const cbName = ctrlBlock.getAttribute('name');
  return doc.querySelector(
    `${addressTag}[ldInst="${ctrlLdInst}"][cbName="${cbName}"]`
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

  @query('#successMessage')
  successMessage!: Snackbar;

  async run(): Promise<void> {
    // fetch unique control blocks and subscribing IEDs
    const controlBlocksAndAPs = new Map<Element, Element[]>();
    Array.from(this.doc.querySelectorAll('ExtRef')).forEach(extRef => {
      const cb = sourceControlBlock(extRef);
      const ap = extRef.closest('AccessPoint')!;

      if (!cb) return;

      // need to store IED and ConnectedAP apName
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
        const firstKey = first[0];
        const secondKey = second[0];
        const comparison = (e: Element) =>
          `${e.tagName} ${e
            .closest('IED')!
            .getAttribute('name')} ${e.getAttribute('name')}`;
        return comparison(secondKey).localeCompare(comparison(firstKey));
      })
    );

    // sort the order IEDs are processed
    sortedControlBlocksAndAPs.forEach((value, key) => {
      sortedControlBlocksAndAPs.set(key, value.sort());
    });

    const edits: Edit[] = [];

    // update namespaces for Transpower and schema instances
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
      edits.push(namespaceUpdate);

    const removePrivates: Remove[] = Array.from(
      this.doc.querySelectorAll(
        'Private[type="Transpower-GSE-Subscribe"], Private[type="Transpower-SMV-Subscribe"]'
      )
    ).map(element => ({ node: element }));

    edits.push(removePrivates);

    this.dispatchEvent(newEditEvent(edits));

    sortedControlBlocksAndAPs.forEach((receivingIeds, cb) => {
      const address = getCommAddress(cb);

      if (!address) {
        console.log(`No address for ${cb}`);
        return;
      }

      const addressSubNetwork = address.closest('SubNetwork');
      const iedName = cb.closest('IED')!.getAttribute('name')!;

      const privateSCL = this.doc.createElementNS(
        this.doc.documentElement.namespaceURI,
        'Private'
      );
      privateSCL.setAttribute(
        'type',
        `Transpower-${address.tagName}-Subscribe`
      );

      privateSCL.setAttributeNS(TPNS, 'iedName', iedName);

      const cbName = cb.getAttribute('name');
      if (cbName) privateSCL.setAttributeNS(TPNS, 'cbName', cbName);

      const ldInst = cb.getAttribute('ldInst');
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
      // TODO: Should we include APPIDs?

      // only proceed if there is something to write
      if (!(addressVlan || addressVlanPriority || addressMac)) {
        console.log(`Missing addresses for ${cb}`);
        return;
      }

      receivingIeds.forEach(ap => {
        const apIedNameRx = ap.closest('IED')!.getAttribute('name');
        const apName = ap.getAttribute('name')!;

        const addressSubNetworkName = addressSubNetwork!.getAttribute('name')!;
        const subNetwork = this.doc.querySelector(
          `:root > Communication > SubNetwork[name="${addressSubNetworkName}"]`
        )!;

        if (!subNetwork) return;

        const subNetworkName = subNetwork.getAttribute('name');
        const connectedAp = subNetwork.querySelector(
          `ConnectedAP[iedName="${apIedNameRx}"][apName="${apName}"]`
        );

        let edit: Insert;

        if (connectedAp) {
          edit = {
            parent: connectedAp,
            node: privateSCL.cloneNode(true),
            reference: connectedAp.firstElementChild,
          };
          console.log(`dispatch edit`, edit.parent, privateSCL);
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
            reference: null,
          };

          console.log(
            `Creating ConnectedAP for IED ${apIedNameRx}, Access Point ${apName} and SubNetwork ${subNetworkName}`
          );
        }
        this.dispatchEvent(newEditEvent(edit));
        this.successMessage.show();
      });
    });
  }

  render(): TemplateResult {
    return html`<mwc-snackbar
      id="successMessage"
      leading
      labelText="Network data updated"
    >
    </mwc-snackbar>`;
  }
}
