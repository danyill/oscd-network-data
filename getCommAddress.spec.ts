import { expect } from '@open-wc/testing';

import { getCommAddress } from './getCommAddress.js';
import { getCommAddressDoc } from './getCommAddress.testfiles.js';

const testDoc = new DOMParser().parseFromString(
  getCommAddressDoc,
  'application/xml'
);

describe('Function to return a communication address for a control block', () => {
  it('returns a GSE for a GSEControl with the correct AP', () => {
    const gseControl = testDoc.querySelector(
      'IED[name="GOOSE_Publisher"] GSEControl[name="GOOSE2"]'
    )!;
    const gseComm = testDoc.querySelector(
      'ConnectedAP[iedName="GOOSE_Publisher"] GSE[cbName="GOOSE2"]'
    )!;

    expect(gseControl).to.not.equal(null);
    expect(gseComm).to.not.equal(null);
    expect(getCommAddress(gseControl)).to.equal(gseComm);
  });

  it('returns a GSE for a GSEControl with the correct AP with no ServerAts defined', () => {
    const gseControl = testDoc.querySelector(
      'IED[name="GOOSE_Publisher2"] GSEControl[name="GOOSE2"]'
    )!;
    const gseComm = testDoc.querySelector(
      'ConnectedAP[iedName="GOOSE_Publisher2"] GSE[cbName="GOOSE2"]'
    )!;

    expect(gseControl).to.not.equal(null);
    expect(gseComm).to.not.equal(null);
    expect(getCommAddress(gseControl)).to.equal(gseComm);
  });

  it('returns null if a GSEControl has no GSE', () => {
    const gseControl = testDoc.querySelector(
      'IED[name="GOOSE_Publisher"] GSEControl[name="GOOSE3"]'
    )!;

    expect(gseControl).to.not.equal(null);
    expect(getCommAddress(gseControl)).to.equal(null);
  });

  it('returns a GSE for a GSEControl referenced with ServerAt', () => {
    const gseControl = testDoc.querySelector(
      'IED[name="GOOSE_Publisher"] GSEControl[name="GOOSE1"]'
    )!;
    const gseComm = testDoc.querySelector(
      'ConnectedAP[apName="PP1"][iedName="GOOSE_Publisher"] > GSE[cbName="GOOSE1"]'
    )!;

    expect(gseControl).to.not.equal(null);
    expect(gseComm).to.not.equal(null);
    expect(getCommAddress(gseControl)).to.equal(gseComm);
  });

  it('returns an SMV for a SampledValueControl with the correct AP', () => {
    const smvControl = testDoc.querySelector(
      'IED[name="SMV_Publisher"] SampledValueControl[name="fullSmv"]'
    )!;
    const smvComm = testDoc.querySelector(
      'ConnectedAP[apName="AP1"][iedName="SMV_Publisher"] SMV[cbName="fullSmv"]'
    )!;

    expect(smvControl).to.not.equal(null);
    expect(smvComm).to.not.equal(null);
    expect(getCommAddress(smvControl)).to.equal(smvComm);
  });

  it('returns null if a SampledValueControl has no SMV', () => {
    const smvControl = testDoc.querySelector(
      'IED[name="SMV_Publisher"] SampledValueControl[name="currrentOnly"]'
    )!;

    expect(smvControl).to.not.equal(null);
    expect(getCommAddress(smvControl)).to.equal(null);
  });

  it('returns a SMV for a SampledValueControl referenced with ServerAt', () => {
    const smvControl = testDoc.querySelector(
      'IED[name="SMV_Publisher"] SampledValueControl[name="currrentOnlyDifferentAp"]'
    )!;
    const smvComm = testDoc.querySelector(
      'ConnectedAP[apName="PP1"][iedName="SMV_Publisher"] > SMV[cbName="currrentOnlyDifferentAp"]'
    )!;

    expect(smvControl).to.not.equal(null);
    expect(smvComm).to.not.equal(null);
    expect(getCommAddress(smvControl)).to.equal(smvComm);
  });
});
