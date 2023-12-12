/*  Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct. */

var containsDuplicate = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    else map.set(nums[i], nums[i]);
  }
  return false;
};

// OPCION 2
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

nums = [1, 2, 3, 8];
console.log(containsDuplicate(nums));
