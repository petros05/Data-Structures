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

  // Revers all node
  revers() {
    let currentNode = this.tail;
    this.head = null;
    this.tail = null;
    this.length = 0;
    while (currentNode) {
      this.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return currentNode;
  }
}

const list = new DoublyLinkedList();
list.push(12);
list.push(2);
list.push(1);
list.revers();
console.log(list);
