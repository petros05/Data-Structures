
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// "Last In, First Out (LAFO)" 
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    };
    
    // Add Element or Node at the bigning
    push(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        };
        this.size++;
        return this
    };

    print() {
        let arr = [];
        let currentNode = this.first
        for(let i = 0; i < this.size; i++) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        };
        return arr;
    }
};

const list = new Stack();
list.push(12);
list.push(1);
list.push(11);
console.log("Bifore pop")
console.log(list.print());
list.pop()
console.log("After pop");
console.log(list.print());