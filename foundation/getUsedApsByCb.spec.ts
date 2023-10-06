import { expect } from '@open-wc/testing';

import { getUsedControlBlocksByAp } from './getUsedApsByCb.js';
import { getControlBlocksByApDoc } from './getUsedApsByCb.testfiles.js';

const testDoc = new DOMParser().parseFromString(
  getControlBlocksByApDoc,
  'application/xml'
);

describe('Function to fetch control blocks by Access Point', () => {
  it('returns SMV control blocks by AP', () => {
    const aps = getUsedControlBlocksByAp(testDoc);

    const controlBlockNames = Array.from(aps.keys()).map(item =>
      item.getAttribute('name')
    );
    expect(controlBlockNames).to.eql(['fullSmv', 'GOOSE2', 'GOOSE2']);

    const fullSmvCb = testDoc.querySelector(
      'SampledValueControl[name="fullSmv"]'
    )!;
    const fullSmvAp = testDoc.querySelector(
      'ConnectedAP[iedName="SMV_Publisher"][apName="AP1"]'
    );
    expect(aps.get(fullSmvCb)).to.equal([fullSmvAp]);
  });
});
