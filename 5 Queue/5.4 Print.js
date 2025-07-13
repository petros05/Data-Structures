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

    // Add an Elemnte or Node at the end
    enqueue(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++
        return this;
    }

    // Print all nodes
    print() {
    let arr = [];
    let current = this.first;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    return arr;
}
};


const list = new Queue();
list.enqueue(12);
list.enqueue(1);
list.enqueue(9);
console.log(list);