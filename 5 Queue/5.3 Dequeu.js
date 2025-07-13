class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// "First In, First Out (FIFO)"
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    };

    // Add an Element or Node at the end.
    enqueue(value) {
        let newNode = new Node(value);
        if(this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    };

    // Remove the first Node or Element
    dequeue() {
        if(!this.first) return null;
        let firstNode = this.first
        if(this.size === 1) this.last = null;
        this.first = this.first.next;
        this.size--;
        return firstNode.value;
    }
}

const list = new Queue();
list.enqueue(12);
list.enqueue(1)
console.log(list)