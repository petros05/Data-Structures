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
    return currentNode;
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
    return newNode;
  }

  // Print methid
  print() {
    let arr = [];
    let currentNode = this.hade;
    for (let i = 0; i < this.length; i++) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr.join(" -> ");
  }
}

const list = new SinglyLinldList();
list.push(4);
list.push(2);
list.push(1);
console.log(list.print())
console.log(list);
