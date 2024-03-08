// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }
  const entries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  return entries.slice(0, k).map(([num]) => num);
}

describe("Top K Frequent", () => {
  test.each([
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1], 1, [1]],
  ])(
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    (numsInput, kInput, expectedResult) => {
      expect(topKFrequent(numsInput, kInput)).toEqual(expectedResult);
    }
  );
});
