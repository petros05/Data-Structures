class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    // Add new node by it's priority
    enqueue(val, priority) {
        this.values.push(new Node(val, priority));
        let currentIdx = this.values.length - 1;
        let parentIdx = Math.floor((currentIdx - 1 ) / 2);

        while(parentIdx >= 0 && this.values[currentIdx].priority > this.values[parentIdx].priority) {
            [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2)
        }
        return this;
    }

    // Remove node by it's priority
    dequeue() {
        if(this.values.length === 0) return undefined;
        if(this.values.length === 1) return this.values.pop();

        const max = this.values[0];
        this.values[0] = this.values.pop();

        let currentIdx = 0;
        let length = this.values.length;

        while(true) {
            let leftChildIdx = currentIdx * 2 + 1;
            let rightChildIdx = currentIdx * 2 + 2;
            let largest = currentIdx;

            if(leftChildIdx < length && this.values[leftChildIdx].priority > this.values[largest].priority) {
                largest = leftChildIdx;
            } 

            if(rightChildIdx < length && this.values[rightChildIdx].priority > this.values[largest].priority) {
                largest = rightChildIdx
            }

            if(currentIdx === largest) break;

            [this.values[currentIdx], this.values[largest]] = [this.values[largest], this.values[currentIdx]];
            currentIdx = largest;

        }
        return max
    }
}

const queue = new PriorityQueue();
queue.enqueue(10, 3);
queue.enqueue(9, 4);
queue.enqueue(90, 10);
queue.enqueue(90, 30);
queue.enqueue(90, 20);
queue.enqueue(20, 2);
console.log(queue.dequeue().priority);
console.log(queue.dequeue().priority);
console.log(queue.dequeue().priority);
console.log(queue.dequeue().priority);
console.log(queue.dequeue().priority);
console.log(queue.dequeue().priority);
console.log(queue.values);