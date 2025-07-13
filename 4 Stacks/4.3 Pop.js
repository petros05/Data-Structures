
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

// "Last In, First Out (LIFO)"
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    };

    // Add Element or Node at the bigning
    push(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this
    };

    // Remove the first Node or Element
    pop() {
        if(!this.first) return null;
        let firstNode = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return firstNode.value;
    }
};

const list = new Stack();
list.push(10);
list.push(20);
list.push(30);
console.log(list);