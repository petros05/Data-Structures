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

  // Add new node at the end
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

  // Find node by it's index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      console.log("From the head");
      let count = 0;
      let currentNode = this.head;
      while (index !== count) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    } else {
      console.log("Form the tail");
      let count = this.length - 1;
      let currentNode = this.tail;
      while (index !== count) {
        currentNode = currentNode.prev;
        count--;
      }
      return currentNode;
    }
  }
}

const list = new DoublyLinkedList();
list.push(12);
list.push(1);
list.push(2);
list.push(8);
list.push(9);
list.push(10);
console.log(list.get(3));
// console.log(list);
