import { sourceControlBlock } from './sourceControlBlock.js';

/**
 * Ensures the nearest element is not within a Private element.
 *
 * @param element
 * @returns
 */
function isPublic(element: Element): boolean {
  return !element.closest('Private');
}

export function getUsedControlBlocksByAp(
  doc: XMLDocument
): Map<Element, Element[]> {
  const controlBlocksAndAPs = new Map<Element, Element[]>();

  Array.from(doc.querySelectorAll('Inputs > ExtRef'))
    .filter(isPublic)
    .forEach(extRef => {
      const cb = sourceControlBlock(extRef);
      const ap = extRef.closest('AccessPoint')!;

      if (!cb) return;

      // need to store the access points
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
      const firstCB = first[0];
      const secondCB = second[0];
      const comparison = (e: Element) =>
        `${e.tagName} ${e
          .closest('IED')!
          .getAttribute('name')} ${e.getAttribute('name')}`;

      return comparison(secondCB).localeCompare(comparison(firstCB));
    })
  );

  // Sort the order access points are processed in
  sortedControlBlocksAndAPs.forEach((aps, cb) => {
    sortedControlBlocksAndAPs.set(cb, aps.sort());
  });

  return sortedControlBlocksAndAPs;
}
