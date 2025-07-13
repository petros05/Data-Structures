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
    console.log(
      `You called shift method so the first node was: ${currentNode.value}`
    );
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

  // Set methode
  set(index, value) {
    let getIndex = this.get(index);
    if (getIndex) {
      getIndex.value = value;
      return true;
    }
    return false;
  }

  // Insert node at specific index
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let getIndex = this.get(index - 1);
    if (getIndex) {
      let newNode = new Node(value);
      let nextCurrentNode = getIndex.next;
      getIndex.next = newNode;
      newNode.next = nextCurrentNode;
      this.length++;
      return true;
    }
    return false;
  }
}

const list = new SinglyLinldList();
list.push(2);
list.push(9);
list.push(4);
console.log(list.insert(0, 1));
console.log(list);
