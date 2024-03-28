function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    let elementCount = map.get(num) || 0;
    map.set(num, elementCount + 1);
  }
  const sortedDescending = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sortedDescending.slice(0, k).map((element) => element[0]);
}

describe("Top K Frequent", () => {
  test.each([
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1], 1, [1]],
  ])(
    "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order",
    (numsInput, kInput, expectedResult) => {
      expect(topKFrequent(numsInput, kInput)).toEqual(expectedResult);
    }
  );
});
