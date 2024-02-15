const isAnagram = (s: string, t: string): boolean => {
  if(!s.length || !t.length) return false;
  const charCount: Record<string, number> = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of t) {
    if (!(char in charCount)) return false;
    charCount[char]--;
    if (charCount[char] === 0) delete charCount[char]
  }
  return Object.keys(charCount).length === 0;  
};

describe("Valid Anagram problem", () => {
  test.each([
    ["anagram", "nagaram", true],
    ["rat", "car", false],
  ])(
    "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    (s, t, expectedResult) => {
      expect(isAnagram(s, t)).toBe(expectedResult);
    }
  );
});
