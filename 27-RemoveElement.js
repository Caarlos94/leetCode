/* 
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
*/

const removeElements = (nums, val) => {
  if (nums.length === 0) return [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

console.log(removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 3
