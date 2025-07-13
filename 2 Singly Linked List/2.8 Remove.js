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

  // get methode;
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.hade;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }



  // Remove node by it's index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let getIndex = this.get(index);
    if (getIndex) {
      this.get(index - 1).next = this.get(index + 1);
      this.length--;
      return getIndex;
    }
  }
}

const list = new SinglyLinldList();
list.push(2);
list.push(9);
list.push(4);
console.log(list.remove(1));
console.log(list);
