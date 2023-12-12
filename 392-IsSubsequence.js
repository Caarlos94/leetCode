/* 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/
// VERSION FUERZA BRURA (8 MINUTOS)  O(s * t)
var isSubsequence = function (s, t) {
  const queue = s.split("");
  let queueIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (queue[queueIndex] === t[i]) queue.shift();
  }
  return queue.length === 0;
};

console.log(isSubsequence("abc", "ahbgdc"));

// VERSION EFICIENTE O(s + t)
var isSubsequenceGPT = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }
  return sIndex === s.length;
};

console.log(isSubsequenceGPT("abc", "ahbgdc"));
