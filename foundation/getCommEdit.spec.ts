// import { expect } from '@open-wc/testing';

// import { getCommEdit } from './getCommEdit.js';
// import { getCommEditDoc } from './getCommEdit.testfiles.js';

// const testDoc = new DOMParser().parseFromString(
//   getCommEditDoc,
//   'application/xml'
// );

// describe('Function to add to Communications section a GSE or SMV Subscribe element', () => {
//   it('returns control blocks ', () => {
//     const addr = testDoc.querySelector(
//       'GSE[ldInst="QB2_Disconnector"][cbName="GOOSE1"]'
//     )!;
//     const commEdit = getCommEdit(addr);

//     console.log(commEdit!.parent);
//     console.log(commEdit!.node);
//     console.log(commEdit!.reference);

//     expect(commEdit).is.not.equal(null);
//     expect(commEdit).to.equal(null);
//   });
// });
