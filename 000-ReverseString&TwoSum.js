const reverseString = (str) => {
  const result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
};
// console.log(reverseString("Mi nombre es Carlos"));

const revereStringRecursive = (str) => {
  if (!str) return str;
  return revereStringRecursive(str.slice(1)) + str[0];
};

console.log(revereStringRecursive("Mi nombre es Carlos"));

const mergeSortedArray = (array1, array2) => {
  if (!array1 || array1.length === 0) return array2;
  if (!array2 || array2.length === 0) return array1;

  const result = [];
  let i = 0;
  let j = 0;
  while (result.length < array1.length + array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  return result;
};
//console.log(mergeSortedArray([1, 2], [2, 4, 5, 7]));

const twoSum = (array, target) => {
  const myObj = {};
  for (let i = 0; i < array.length; i++) {
    let newT = target - array[i];
    if (typeof myObj[newT] === "undefined") myObj[array[i]] = i;
    else return [myObj[newT], i];
  }
};
// console.log(twoSum([2, 7, 11, 15], 9));

const twoSumMap = (array, target) => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (!map.has(target - array[i])) {
      map.set(array[i], i);
    } else {
      return [map.get(target - array[i]), i];
    }
  }
};

console.log(twoSumMap([2, 7, 11, 15], 9));
