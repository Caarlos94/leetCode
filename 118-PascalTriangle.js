/* 
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly:
*/
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  let prevRows = generate(numRows - 1);
  let newRow = new Array(numRows).fill(1);

  for (let i = 1; i < numRows - 1; i++) {
    newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
  }

  prevRows.push(newRow);
  return prevRows;
};

let numRows = 6;
console.log(generate(numRows));
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
