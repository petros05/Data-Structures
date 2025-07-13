class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    };
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    // Add new node at the end
    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this
    };

    // Add new node at first/beginning
    unShift(value) {
        let newNode = new Node(value);
        if(!this.head) { 
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return newNode
    }
};

const list = new DoublyLinkedList(); 
console.log(list)