/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/

const moveZeroes = function (nums) {
  if (nums.length === 0 || !nums) return [];
  let position = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[position++] = nums[i];
  }
  for (let i = position; i < nums.length; i++) {
    nums[i] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
