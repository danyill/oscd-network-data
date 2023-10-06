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

import { getCommAddress } from './foundation/getCommAddress.js';

import {
  TPNS,
  XSINS,
  createSubscribedAddress,
} from './foundation/createSubscribedAddress.js';

import { getUsedControlBlocksByAp } from './foundation/getUsedApsByCb.js';

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
    const apName = address.closest('ConnectedAP')!.getAttribute('apName');
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

  async run(): Promise<void> {
    // fetch unique control blocks and the connected APs
    const controlBlocksByAP = getUsedControlBlocksByAp(this.doc);

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

    let addedSubscriptionCount = 0;

    controlBlocksByAP.forEach((receivingAccessPoints, cb) => {
      const address = getCommAddress(cb);

      // missing address
      if (!address) return;

      const privateSCL = createSubscribedAddress(address);

      // If there are no addresses to write move to next control block
      if (!privateSCL) return;

      receivingAccessPoints.forEach(ap => {
        const edit = this.getCommunicationEdit(ap, address, privateSCL);

        if (edit) {
          this.dispatchEvent(newEditEvent(edit));
          addedSubscriptionCount += 1;
        }
      });
    });
    this.subscriptionCount = addedSubscriptionCount;

    this.successMessage.show();
  }

  render(): TemplateResult {
    return html`<mwc-snackbar
      id="successMessage"
      leading
      labelText="Network data updated (${this
        .subscriptionCount} items written to the Communication section)."
    >
    </mwc-snackbar>`;
  }
}
