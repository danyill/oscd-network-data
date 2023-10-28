import { LitElement, TemplateResult, html } from 'lit';
import { property, query } from 'lit/decorators.js';

import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-snackbar';
import '@material/mwc-switch';

import { Edit, newEditEvent } from '@openscd/open-scd-core';
import { controlBlockGseOrSmv } from '@openenergytools/scl-lib';
import type { Snackbar } from '@material/mwc-snackbar';

import { createSubscribedAddress } from './foundation/createSubscribedAddress.js';

import { getUsedCBs } from './foundation/getUsedCBs.js';
import { getCommEdit } from './foundation/getCommEdit.js';
import { updateNamespaces } from './foundation/updateNamespaces.js';
import { removeExistingSubscribedAddresses } from './foundation/removeExistingSubscribedAddresses.js';

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

  async run(): Promise<void> {
    const edits: Edit[] = [];

    // update namespaces for Transpower and schema instances
    const namespaceUpdate = updateNamespaces(this.doc);

    if (namespaceUpdate) edits.push(namespaceUpdate);

    // remove any existing addresses to allow a complete rewrite
    const removePrivates = removeExistingSubscribedAddresses(this.doc);

    if (removePrivates) edits.push(...removePrivates);

    this.dispatchEvent(newEditEvent(edits));

    // now build addresses from scratch

    this.subscriptionCount = 0;

    let addedSubscriptionCount = 0;

    const usedCBs = getUsedCBs(this.doc);

    if (!usedCBs) return;

    usedCBs.forEach((subscribingIedNames, cb) => {
      const address = controlBlockGseOrSmv(cb);
      // missing address
      if (!address) return;
      const privateSCL = createSubscribedAddress(address);
      // nothing to add for addressing
      if (!privateSCL) return;

      subscribingIedNames.forEach(iedName => {
        const edit = getCommEdit(address, privateSCL, iedName);

        if (edit) {
          this.dispatchEvent(newEditEvent(edit));
          addedSubscriptionCount += 1;
        }
      });
      this.subscriptionCount = addedSubscriptionCount;
    });
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
