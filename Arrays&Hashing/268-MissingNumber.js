/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

const missingNumber = (array) => {
  const arraySorted = mergeSort(array);
  for (let i = 0; i < array.length; i++) {
    if (arraySorted[i] !== i) return i;
  }
  return array.length;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
};

const merge = (left, right) => {
  let leftCount = 0;
  let rightCount = 0;
  let response = [];
  while (rightCount < right.length && leftCount < left.length) {
    if (left[leftCount] > right[rightCount]) {
      response.push(right[rightCount]);
      rightCount++;
    } else {
      response.push(left[leftCount]);
      leftCount++;
    }
  }
  return response.concat(left.slice(leftCount)).concat(right.slice(rightCount));
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
/*
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
8 is the missing number in the range since it does not appear in nums.
*/
