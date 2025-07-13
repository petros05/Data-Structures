class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return popedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let firstNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode.next;
      this.head.prev = null;
      firstNode.next = null;
    }
    this.length--;
    return firstNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index <= this.length / 2) {
      let count = 0;
      let currentNode = this.head;
      while (index !== count) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    } else {
      let count = this.length - 1;
      let currentNode = this.tail;
      while (index !== count) {
        currentNode = currentNode.prev;
        count--;
      }
      return currentNode;
    }
  }
  
  // Remove node at by it's index
  remove(index) {
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return !!this.shift();
    if(index === this.length - 1) return !!this.pop();
    let removNode = this.get(index);
    removNode.prev.next = removNode.next;
    removNode.next.prev = removNode.prev;
    removNode.next = null;
    removNode.prev = null;
    this.length--;
    return removNode
  }
}

const list = new DoublyLinkedList();
list.push(12);
list.push(17);
list.push(16);
list.push(14);
console.log(list.remove(2));
console.log(list);
