const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  const charCount: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    charCount[t[i]] = (charCount[t[i]] || 0) - 1;
  }
  return Object.values(charCount).every((count) => count === 0);
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
