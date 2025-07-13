// Singly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinldList {
  constructor() {
    this.hade = null;
    this.tail = null;
    this.length = 0;
  }

  // push method
  push(value) {
    let newNode = new Node(value);
    if (!this.hade) {
      this.hade = newNode;
      this.tail = this.hade;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.hade;
  }

  // Pop method
  pop() {
    if (!this.hade) return undefined;
    let currentNode = this.hade;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.hade = null;
      this.tail = null;
    }
    return currentNode;
  }

  // Shift method
  shift() {
    if (!this.hade) return undefined;
    let currentNode = this.hade;
    this.hade = currentNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentNode.value;
  }

  // Unshift method
  unshift(value) {
    let newNode = new Node(value);
    if (!this.hade) {
      this.hade = newNode;
      this.tail = this.hade;
    } else {
      let nextNode = this.hade;
      this.hade = newNode;
      this.hade.next = nextNode;
    }
    this.length++;
    console.log(`You called unshift method with a value ${newNode.value}`);
  }

  // Reverse all node
  reverse() {
    let firstNode = this.hade;
    this.hade = this.tail;
    this.tail = firstNode;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = firstNode.next;
      firstNode.next = prev;
      prev = firstNode;
      firstNode = next;
    }
    return this;
  }
}

const list = new SinglyLinldList();
list.push(2);
list.push(9);
list.push(4);
list.reverse();
console.log(list.print());
console.log(list);
