/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/
var majorityElement = (array) => {
  if (array.length <= 0) return [];
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], (map.get(array[i]) || 0) + 1);
  }

  let maxCount = 0;
  let majorityElement = null;
  // Encontrar el elemento con el conteo máximo
  map.forEach((value, key) => {
    if (value > maxCount) {
      maxCount = value;
      majorityElement = key;
    }
  });
  return majorityElement;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Output: 3
