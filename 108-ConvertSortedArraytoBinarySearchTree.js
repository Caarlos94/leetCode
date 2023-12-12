/* Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree. */

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const sortedArrayToBST = (nums, tree) => {
  // MIENTRAS NUMS SEA MAYOR A CERO
  if (nums.length <= 0) return null;

  let mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

let nums = [-10, -3, 0, 5, 9];
const response = sortedArrayToBST(nums);
console.log(response);

/* 
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted: 
*/
