/* 
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may 
return the result in any order.
*/

var intersect1 = function (nums1, nums2) {
  if (nums1.length <= 0 || nums2.length <= 0) return [];
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
  }
  const response = [];
  for (let j = 0; j < nums2.length; j++) {
    if (map.has(nums2[j]) && map.get(nums2[j]) > 0) {
      response.push(nums2[j]);
      map.set(nums2[j], map.get(nums2[j]) - 1);
    }
  }
  return response;
};

console.log(intersect1([1, 2, 2, 1], [2, 2]));
//Output: [2,3]

var intersect = function (nums1, nums2) {
  if (nums1.length <= 0 || nums2.length <= 0) return [];
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums2[j]);
        nums2[j] = -1;
        break;
      }
    }
  }
  return result;
};
