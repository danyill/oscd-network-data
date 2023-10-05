/** @returns the cartesian product of `arrays` */
function crossProduct<T>(...arrays: T[][]): T[][] {
  return arrays.reduce<T[][]>(
    (a, b) => <T[][]>a.flatMap(d => b.map(e => [d, e].flat())),
    [[]]
  );
}

/**
 * Looks up Communication section GSE or SMV addresses based on the control block
 * within the IED section (GSEControl or SampledValueControl).
 * @param ctrlBlock - SCL control block element (GSEControl or SampledValueControl)
 * @returns SCL GSE or SMV address element or null if not found.
 */
export function getCommAddress(ctrlBlock: Element): Element | null {
  const doc = ctrlBlock.ownerDocument;

  const ctrlLdInst = ctrlBlock.closest('LDevice')!.getAttribute('inst');
  const addressTag = ctrlBlock.tagName === 'GSEControl' ? 'GSE' : 'SMV';
  const ied = ctrlBlock.closest('IED')!;

  const apName = ctrlBlock.closest('AccessPoint')!.getAttribute('name');

  let apNames = [];
  const serverAts = ied.querySelectorAll(
    `AccessPoint > ServerAt[apName="${apName}"`
  );
  if (serverAts.length > 0) {
    const serverAtNames = Array.from(serverAts).map(ap =>
      ap.closest('AccessPoint')!.getAttribute('name')
    );
    apNames = [apName, ...serverAtNames];
  } else {
    apNames = [apName];
  }

  const iedName = ied.getAttribute('name');
  const connectedAps = `:root > Communication > SubNetwork > ConnectedAP[iedName="${iedName}"]`;
  const connectedApNames = apNames.map(ap => `[apName="${ap}"]`);

  const cbName = ctrlBlock.getAttribute('name');
  const addressElement = `${addressTag}[ldInst="${ctrlLdInst}"][cbName="${cbName}"]`;

  return doc.querySelector(
    crossProduct([connectedAps], connectedApNames, ['>'], [addressElement])
      .map(strings => strings.join(''))
      .join(',')
  );
}
