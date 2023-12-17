/*
136. Single Number
********************************************** INTENTO 1
FECHA: 30/11/2023
TIEMPO: 35 MINUTOS
ESTATUS: NO RESUELTO
CODIGO:

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

// SEGUNDA VEZ RESUELTO 17/12/2023 EN 9 MINUTOS
const singleNumber = (nums) => {
  const hash = {};
  for (let number of nums) {
    if (!hash[number]) hash[number] = true;
    else hash[number] = false;
  }

  for (let nums in hash) {
    if (hash[nums]) return nums;
  }
};

console.log(singleNumber([1, 2, 2]));

var singleNumber1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] === nums[j]) {
        break;
      }
    }
    if (j === nums.length - 1) return nums[i];
  }
};

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// RECURSIVE DFS
const dephtFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = dephtFirstValues(root.left);
  const rightValues = dephtFirstValues(root.right);
  return [root.value, ...leftValues, ...rightValues];
};

// console.log("RECURSIVE DFS");
// console.log(dephtFirstValues(a));

// ITERATIVE DFS
const dephtFirstValuesIterative = (root) => {
  if (root === null) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

//console.log("ITERATIVE DFS");
//console.log(dephtFirstValuesIterative(a));

// ITERATIVE BFS
const breadthFirstSearch = (root) => {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
};

//console.log("ITERATIVE BFS");
//console.log(breadthFirstSearch(a));
