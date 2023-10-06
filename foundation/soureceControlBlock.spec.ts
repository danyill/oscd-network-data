import { expect } from '@open-wc/testing';

import { sourceControlBlock } from './sourceControlBlock.js';
import { sourceControlBlockDoc } from './sourceControlBlock.testfiles.js';

const testDoc = new DOMParser().parseFromString(
  sourceControlBlockDoc,
  'application/xml'
);

describe('Function to return a control block from an ExtRef', () => {
  it('returns a GSEControl for an GOOSE ExtRef', () => {
    const extRef = testDoc.querySelector(
      'IED[name="GOOSE_Subscriber"] Inputs > ExtRef[iedName="GOOSE_Publisher"][srcCBName="GOOSE2"]'
    )!;
    const gseCtrl = testDoc.querySelector(
      'IED[name="GOOSE_Publisher"] GSEControl[name="GOOSE2"]'
    )!;

    expect(extRef).to.not.equal(null);
    expect(gseCtrl).to.not.equal(null);
    expect(sourceControlBlock(extRef)).to.equal(gseCtrl);
  });

  it('returns null if there is no match for a GOOSE ExtRef', () => {
    const extRef = testDoc.querySelector(
      'IED[name="GOOSE_Subscriber"] Inputs > ExtRef[iedName="GOOSE_Publisher"][srcCBName="GOOSE2DoesNotExist"]'
    )!;

    expect(extRef).to.not.equal(null);
    expect(sourceControlBlock(extRef)).to.equal(null);
  });

  it('returns a GSEControl for a GOOSE ExtRef when the GSEControl LN has no prefix', () => {
    const extRef = testDoc.querySelector(
      'IED[name="GOOSE_Subscriber"] Inputs > ExtRef[iedName="GOOSE_Publisher2"][srcCBName="GOOSE2"]'
    )!;

    const gseCtrl = testDoc.querySelector(
      'IED[name="GOOSE_Publisher2"] GSEControl[name="GOOSE2"]'
    )!;

    expect(extRef).to.not.equal(null);
    expect(gseCtrl).to.not.equal(null);
    expect(sourceControlBlock(extRef)).to.equal(gseCtrl);
  });

  it('returns a SampledValueControl for an SV ExtRef', () => {
    const extRef = testDoc.querySelector(
      'IED[name="SMV_Subscriber"] Inputs > ExtRef[iedName="SMV_Publisher"][intAddr="AmpSv;TCTR3/AmpSv/instMag.i"]'
    )!;
    const gseCtrl = testDoc.querySelector(
      'IED[name="SMV_Publisher"] SampledValueControl[name="fullSmv"]'
    )!;

    expect(extRef).to.not.equal(null);
    expect(gseCtrl).to.not.equal(null);
    expect(sourceControlBlock(extRef)).to.equal(gseCtrl);
  });

  it('returns null if there is no match for a SV ExtRef', () => {
    const extRef = testDoc.querySelector(
      'IED[name="SMV_Subscriber"] Inputs > ExtRef[iedName="SMV_Publisher"][intAddr="AmpSv;TCTR2/AmpSv/instMag.i"]'
    )!;
    expect(extRef).to.not.equal(null);
    expect(sourceControlBlock(extRef)).to.equal(null);
  });
});
