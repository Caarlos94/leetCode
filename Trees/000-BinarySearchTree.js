class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    const nodeHead = new Node(value);
    this.head = nodeHead;
  }

  insert(value) {
    const newNode = new Node(value);
    let current = this.head;
    while (true) {
      if (value < current.value) {
        // Left
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        // Right
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // LOOKUP DE FORMA RECURSIVA PARA ARBOL NO NECESARIAMENTE BINARY SEARCH TREE
  lookup(value) {
    let current = this.head;
    return this._recursiveSearch(current, value);
  }
  _recursiveSearch(head, value) {
    let current = head;
    if (!current) return false;
    if (current.value === value) return true;
    return (
      this._recursiveSearch(current.left, value) ||
      this._recursiveSearch(current.right, value)
    );
  }

  // SEARCH OPTIMIZADO PARA BINARY SEARCH TREE
  search(value) {
    let current = this.head;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (current.value === value) return true;
    }
    return false;
  }
}

const myTree = new BinarySearchTree(10);
myTree.insert(5);
myTree.insert(2);
myTree.insert(7);
myTree.insert(15);
myTree.insert(12);
myTree.insert(18);
console.log(myTree.lookup(5));
console.log(myTree.search(5));
console.log(myTree);
