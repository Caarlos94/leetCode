/* 
// NO PASA TODOS LOS TEST
Given an m x n binary matrix mat, return the number of special positions in mat.
A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0
(rows and columns are 0-indexed).
*/

var numSpecial = function (mat) {
  let index = 0;
  let result = 0;
  while (index < mat[0].length) {
    let count = 0;
    let countRow = 0;
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][index] === 1) count++;
    }
    for (let j = 0; j < mat.length; j++) {
      if (mat[index][j] === 1) countRow++;
    }
    if (count === 1 && countRow === 1) result++;
    index++;
  }
  return result;
};

console.log(
  numSpecial([
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);

console.log(
  numSpecial([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ])
);

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
);
