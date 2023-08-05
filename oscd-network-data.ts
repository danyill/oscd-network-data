import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-switch';

import {
  Edit,
  EditEvent,
  Insert,
  Update,
  newEditEvent,
} from '@openscd/open-scd-core';
import { connected } from 'process';
import { isNull } from 'util';

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

// from scl-lib
/** @returns object reference acc. IEC 61850-7-3 for control block elements */
function controlBlockObjRef(ctrlBlock: Element): string | null {
  const iedName = ctrlBlock.closest('IED')?.getAttribute('name');
  const ldInst = ctrlBlock.closest('LDevice')?.getAttribute('inst');

  const parentLn = ctrlBlock.closest('LN,LN0');

  const prefix = parentLn?.getAttribute('prefix') ?? '';
  const lnClass = parentLn?.getAttribute('lnClass');
  const lnInst = parentLn?.getAttribute('inst') ?? '';

  const cbName = ctrlBlock.getAttribute('name');
  if (!iedName || !ldInst || !lnClass || !cbName) return null;

  return `${iedName}${ldInst}/${prefix}${lnClass}${lnInst}.${cbName}`;
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

export default class NetworkConfig extends LitElement {
  /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @property({ attribute: false })
  docName!: string;

  async run(): Promise<void> {
    // remove existing elements
    // create new elements
    const controlBlocks = new Map<Element, Element[]>();
    Array.from(this.doc.querySelectorAll('ExtRef')).forEach(extRef => {
      const cb = sourceControlBlock(extRef);
      const ied = extRef.closest('IED')!;

      if (!cb) return;

      if (controlBlocks.has(cb)) {
        controlBlocks.set(cb, [...controlBlocks.get(cb)!, ied]);
      } else {
        controlBlocks.set(cb, [ied]);
      }
    });

    const edits: Edit[] = [];

    const removePrivates = Array.from(
      this.doc.querySelectorAll(
        'Private[type="Transpower-GSE-Receive"], Private[type="Transpower-SMV-Receive"]'
      )
    ).map(element => ({ node: element }));

    edits.push(removePrivates);

    const namespaceUpdate: Update = {
      element: this.doc.documentElement,
      attributes: {},
    };

    if (!this.doc.documentElement.hasAttribute('xmlns:etp'))
      namespaceUpdate.attributes = {
        ...namespaceUpdate.attributes,
        'xmlns:etp': {
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

    Array.from(controlBlocks.keys()).forEach(cb => {
      const receivingIeds = controlBlocks.get(cb)!;
      const address = getCommAddress(cb);
      const subNetwork = address.closest('SubNetwork');
      const iedName = cb.closest('IED')!.getAttribute('name')!;

      const privateSCL = this.doc.createElementNS(
        this.doc.documentElement.namespaceURI,
        'Private'
      );
      privateSCL.setAttribute('type', `Transpower-${address.tagName}-Receive`);

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

      // const appId = address.querySelector('P[type="APPID"]');
      // if (appId) {
      //   const app = this.doc.createElementNS(TPNS, 'P');
      //   app.setAttribute('type', 'APPID');
      //   app.setAttributeNS(XSINS, 'type', 'tP_APPID');
      //   app.textContent = appId.textContent;
      // }

      // only proceed if there is something to write
      if (
        [addressVlan, addressVlanPriority, addressMac].every(
          addr => addr === null
        )
      )
        return;

      receivingIeds.forEach(ied => {
        const iedNameRx = ied.getAttribute('name');
        const subNetworkName = subNetwork?.getAttribute('name');
        const connectedAp = this.doc.querySelector(
          `:root > Communication > SubNetwork[name="${subNetworkName}"] > ConnectedAP[iedName="${iedNameRx}"]`
        );
        console.log(connectedAp);
        if (connectedAp) {
          const edit: Insert = {
            parent: connectedAp,
            node: privateSCL,
            reference: null,
          };
          edits.push(edit);
        }
      });
    });

    // this.dispatchEvent(newEditEvent(removals))
    this.dispatchEvent(newEditEvent(edits));
  }
}
