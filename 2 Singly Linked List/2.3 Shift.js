class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class SinglyLinldList {
    constructor() {
        this.hade = null;
        this.tail = null;
        this.length = 0;
    }

    // Push to Singly Linkd List
    push(value) {
        let newNode = new Node(value);
        if(!this.hade) {
            this.hade = newNode;
            this.tail = this.hade
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this.hade
    };

    // Pop from Singly List
    pop() {
        if(!this.hade) return undefined;
        let currentNode = this.hade;
        let newTail = currentNode;
        while(currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.hade = null;
            this.tail = null;
        }
        return currentNode
    };

    // Remove first node
    shift() {
        if(!this.hade) return undefined;
        let currentNode = this.hade
        let nextNode = currentNode.next;
        this.hade = nextNode
        this.length--;
        if(this.length === 0) {
            this.hade = null;
            this.tail = null;
        }
        return "First node was" + ": " + currentNode.value
    }
};

const list = new SinglyLinldList();

list.push(2);
list.push(5);
list.push(3);
console.log(list.shift())
console.log(list)