import { compareArraysIgnoringOrder } from "../utils";

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
function groupAnagrams(strs: string[]): string[][] {
  const anagramGroups: Record<string, string[]> = {};
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (anagramGroups[sortedStr]) {
      anagramGroups[sortedStr].push(str);
    } else {
      anagramGroups[sortedStr] = [str];
    }
  }
  return Object.values(anagramGroups);
}

describe("Group Anagrams problem.", () => {
  test.each([
    [
      ["eat", "tea", "tan", "ate", "nat", "bat"],
      [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    ],
    [[""], [[""]]],
    [["a"], [["a"]]],
  ])("Group the anagrams together.", (inputArray, expectedResult) => {
    const result = groupAnagrams(inputArray);
    expect(compareArraysIgnoringOrder(result, expectedResult)).toBeTruthy();
  });
});
