import { getReference } from '@openenergytools/scl-lib';
import { createElement } from '@openenergytools/scl-lib/dist/foundation/utils';
import { Insert } from '@openscd/open-scd-core';

export function getCommEdit(
  address: Element,
  privateSCL: Element,
  iedName: string
): Insert | undefined {
  // const apIedNameRx = address.closest('ConnectedAP')!.getAttribute('iedName');
  const apName = address.closest('ConnectedAP')!.getAttribute('apName');

  const addressSubNetwork = address.closest('SubNetwork');
  const addressSubNetworkName = addressSubNetwork!.getAttribute('name')!;

  const doc = address.ownerDocument;
  const subNetwork = doc.documentElement.querySelector(
    `:root > Communication > SubNetwork[name="${addressSubNetworkName}"]`
  )!;

  // this plugin relies on there already being some communications
  // and therefore a SubNetwork already existing
  if (!subNetwork) return undefined;

  const connectedAp = subNetwork.querySelector(
    `ConnectedAP[iedName="${iedName}"][apName="${apName}"]`
  );

  if (!privateSCL) return undefined;

  let edit: Insert;

  if (connectedAp) {
    edit = {
      parent: connectedAp,
      node: privateSCL.cloneNode(true),
      reference: getReference(connectedAp, 'Private'),
    };
  } else {
    // create new access point
    const newConnectedAp = createElement(doc, 'ConnectedAP', {
      apName,
      iedName,
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
