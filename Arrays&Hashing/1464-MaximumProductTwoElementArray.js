/*
Given the array of integers nums, you will choose two different indices i and j of that array. 
Return the maximum value of (nums[i]-1)*(nums[j]-1).
*/

// TIME COMPLEXITY O(nlogn)   SPACE COMPLEXITY O(n)
const maxProduct = (nums) => {
  const numsSorted = nums.sort((a, b) => a - b);
  const lastNums = numsSorted.slice(nums.length - 2, nums.length);
  return (lastNums[0] - 1) * (lastNums[1] - 1);
};

console.log(maxProduct([10, 2, 5, 2]));

// RESPUESTA DE LEETCODE
// TIME COMPLEXITY O(n)   SPACE COMPLEXITY O(n)
var maxProductLeetCode = function (nums) {
  let [first, second] = [0, 0];
  for (const number of nums) {
    if (number > first) {
      [first, second] = [number, first];
    } else if (number > second) {
      second = number;
    }
  }
  return (first - 1) * (second - 1);
};

console.log(maxProductLeetCode([10, 2, 5, 2]));

/*
Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, 
that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
*/
