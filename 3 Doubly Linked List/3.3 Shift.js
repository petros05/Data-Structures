class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    };

    push(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this.head
    };

    pop() {
        if(!this.head) return undefined;
        let lastNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = lastNode.prev;
            this.tail.next = null;
            lastNode.prev = null;
        }
        this.length--
        return lastNode;
    };

    // Remove first node
    shift() {
        if(!this.head) return undefined;
        let firstNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = firstNode.next;
            this.head.prev = null;
            firstNode.next = null;
        }
        this.length--;
        return firstNode
    }
};

const list = new DoublyLinkedList();
list.push(12);
list.push(1);
list.push(92);
list.shift();
console.log(list)