class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

let newNode = new Node(12);
newNode.next = new Node(34);
console.log(newNode)