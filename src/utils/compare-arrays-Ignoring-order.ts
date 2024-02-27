export const compareArraysIgnoringOrder = (
  arr1: string[][],
  arr2: string[][]
): boolean => {
  const stringifyAndSort = (arr: string[][]) =>
    arr.map((group) => JSON.stringify(group.sort())).sort();
  return (
    JSON.stringify(stringifyAndSort(arr1)) ===
    JSON.stringify(stringifyAndSort(arr2))
  );
};
