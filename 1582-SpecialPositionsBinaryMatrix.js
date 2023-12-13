/* 
Given an m x n binary matrix mat, return the number of special positions in mat.
A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0
(rows and columns are 0-indexed).
*/

var numSpecial = function (mat) {
  let numSpecial = 0;
  let currentIndex = 0;
  while (currentIndex < mat.length) {
    let container = [];
    for (let i = 0; i < mat.length; i++) {
      container.push(mat[i][currentIndex]);
    }
    const resultSum = container.reduce((acc, current) => acc + current, 0);
    if (resultSum === 1) numSpecial++;
    currentIndex++;
  }
  return numSpecial;
};

console.log(
  numSpecial([
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);
