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
    if (index < 0 || index >= this.length) return undefined;
    let currentNode, counter;
    if (index <= (this.length - 1) / 2) {
      currentNode = this.head;
      counter = 0;
      while (index !== counter) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      while (index !== counter) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  // Update node value by it's index
  set(index, value) {
    let getIndex = this.get(index);
    if (getIndex) {
      getIndex.value = value;
      return true;
    }
    return false; 
  }
}

const list = new DoublyLinkedList();
list.push(13);
list.push(11);
list.push(14);
list.push(12);
console.log(list.set(1, 3));
console.log(list.head);
