import { expect } from '@open-wc/testing';

import { getCommAddress } from './getCommAddress.js';
import { getCommAddressDoc } from './getCommAddress.testfiles.js';

const testDoc = new DOMParser().parseFromString(
  getCommAddressDoc,
  'application/xml'
);

describe('Function to return a control block from an ExtRef', () => {
  it('returns a GSE for a GSEControl with the correct AP', () => {
    const gseControl = testDoc.querySelector(
      'IED[name="GOOSE_Publisher"] GSEControl[name="GOOSE2"]'
    )!;
    const gseComm = testDoc.querySelector(
      'ConnectedAP[iedName="GOOSE_Publisher"] GSE[cbName="GOOSE2"]'
    )!;

    expect(gseControl).to.not.equal(null);
    expect(gseComm).to.equal(null);
    expect(getCommAddress(gseControl)).to.equal(gseComm);
  });
});
