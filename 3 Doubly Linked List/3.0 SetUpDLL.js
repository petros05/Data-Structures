class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList  {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    };
};

const list = new DoublyLinkedList();
console.log(list)