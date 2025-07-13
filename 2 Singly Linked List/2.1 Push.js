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

  // Add new node/element at the end
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
}

const first = new SinglyLinldList();
first.push(4);
first.push(6);
first.push(8);
first.push(2);
console.log(first);
