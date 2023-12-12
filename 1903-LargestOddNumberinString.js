/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) 
that is a non-empty substring of num, or an empty string "" if no odd integer exists.
A substring is a contiguous sequence of characters within a string.
*/

var largestOddNumber = function (num) {
  if (parseInt(num.slice(-1)) % 2 === 1) return num;
  let i = num.length - 1;
  while (i >= 0) {
    const n = parseInt(num[i]);
    if (n % 2 === 1) return num.slice(0, i + 1);
    i--;
  }
  return "";
};

console.log(largestOddNumber("52"));
console.log(BigInt("52"));
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
