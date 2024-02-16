const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

describe("Contains Duplicate Problem", () => {
  test.each([
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
  ])(
    "Return true if any value appears at least twice in the array, and return false if every element is distinct.",
    (inputArray, expectedResult) => {
      expect(containsDuplicate(inputArray)).toBe(expectedResult);
    }
  );
});
