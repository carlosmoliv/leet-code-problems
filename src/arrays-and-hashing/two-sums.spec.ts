// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order
const twoSum = (nums: number[], target: number): number[] => {
  const indexes = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (indexes.has(complement)) {
      return [indexes.get(complement)!, i];
    }
    indexes.set(nums[i], i);
  }
  throw Error("No solution found");
};

describe("Two sum", () => {
  test.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
  ])(
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    (numsInput, targetInput, expectedResult) => {
      expect(twoSum(numsInput, targetInput)).toEqual(expectedResult);
    }
  );
});
