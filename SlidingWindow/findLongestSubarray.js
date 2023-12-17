function findLongestSubarray(arr, targetSum) {
  let start = 0;
  let end = 0;
  let currentSum = 0;
  let maxLength = 0;
  let result = [];

  while (end < arr.length) {
    currentSum += arr[end];
    while (currentSum > targetSum) {
      // Contraer la ventana desde el inicio
      currentSum -= arr[start];
      start++;
    }
    // Verificar si la longitud actual de la subarray es la máxima
    const currentLength = end - start + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      result = [start, end];
    }
    // Expandir la ventana
    end++;
  }
  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 15;
const longestSubarray = findLongestSubarray(arr, targetSum);
console.log(longestSubarray); // Output: [0, 4]
