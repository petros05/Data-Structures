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

  // Push method
  push(value) {
    let newNode = new Node(value);
    if(!this.hade) {
        this.hade = newNode;
        this.tail = this.hade
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
    return this.hade
  }

  // Pop Method
  pop() {
    if (!this.hade) return undefined
    let currentNode = this.hade;
    let newTail = currentNode;
    while(currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0) {
        this.hade = null;
        this.tail = null;
    }
    return currentNode
  };

  // Shift Method
  shift() {
    if(!this.hade) return undefined;
    let currentNode = this.hade;
    this.hade = currentNode.next;
    this.length--
    if(this.length === 0) {
        this.tail = null
    }
    return `First node was: ${currentNode.value}`
  };

  // Add new node at the first/beginning
  unshift(value) {
    let newNode = new Node(value);
    if(!this.hade) {
        this.hade = newNode;
        this.tail = this.hade
    } else {
        let currentNode = this.hade
        this.hade = newNode
        this.hade.next = currentNode
    }
    this.length++
    return this.hade
  }
}

let list = new SinglyLinldList();
list.unshift(9)
list.unshift(94)
console.log(list)
