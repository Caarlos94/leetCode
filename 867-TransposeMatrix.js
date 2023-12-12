const transpose = function (matrix) {
  if (!matrix || matrix.length === 0) return [];
  const len = matrix.length;
  const response = [];
  let numIndex = 0;
  while (numIndex < matrix[0].length) {
    const transpose = [];
    for (let i = 0; i < len; i++) {
      transpose.push(matrix[i][numIndex]);
    }
    response.push(transpose);
    numIndex++;
  }
  return response;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
