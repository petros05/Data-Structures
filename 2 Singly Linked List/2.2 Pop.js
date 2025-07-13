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

  // Remove last node/element
  pop() {
    let current = this.hade;
    let newTail = current;
    if (!current) return undefined;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.hade = null;
      this.tail = null;
    }
    return current;
  }
}

const list = new SinglyLinldList();
list.push(3);
list.push(2);
list.push(5);
// console.log(list.pop());
console.log(list.hade)
console.log(list.hade.value);
