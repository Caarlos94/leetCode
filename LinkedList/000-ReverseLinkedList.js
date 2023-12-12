class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  push = (value) => {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  };

  print = () => {
    let current = this.head;
    const values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  };

  insert = (index, value) => {
    const newNode = new Node(value);
    let current = this.head;
    let whenStop = 0;
    while (whenStop < index - 1) {
      current = current.next;
      whenStop++;
    }
    newNode.next = current.next;
    current.next = newNode;
  };

  reverse = () => {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  };
}

const myLinkedList = new LinkedList(3);
myLinkedList.push(2);
myLinkedList.push(8);
console.log(myLinkedList.print());
console.log(myLinkedList.reverse());
