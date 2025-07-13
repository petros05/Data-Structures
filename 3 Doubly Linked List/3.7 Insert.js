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

  unShift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

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


  // Insert node at specific index
  insert(index, value) {
    if(index < 0 || index > this.length) return undefined
    if (index === 0) return !!this.unShift(value);
    if (index === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let beforNode = this.get(index - 1);
    let afetrNode = beforNode.next;
    beforNode.next = newNode;
    newNode.prev = beforNode;
    newNode.next = afetrNode;
    afetrNode.prev = newNode;
    this.length++
    return true;
  }
}

const list = new DoublyLinkedList();
list.push(12);
list.push(120);
list.push(112);
list.push(2);
console.log(list.insert(4, 20));
console.log(list);
