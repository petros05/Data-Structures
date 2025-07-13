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
        this.length = 0;
    };

    // Add new node/element at the end
    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    
    // Print all nodes
    print() {
        let valueArr = [];
        let currentNode = this.head;
        while(currentNode) {
            valueArr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return valueArr;
    }
};

