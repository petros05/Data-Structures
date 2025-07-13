class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class MinPriorityQueue {
    constructor() {
        this.values = [];
    }

    // Add new node by it's priority
    enqueue(val, priority) {
        this.values.push(new Node(val, priority));
        let currentIdx = this.values.length - 1;
        let parentIdx = Math.floor((currentIdx - 1) / 2);

        while(parentIdx >= 0 && this.values[currentIdx].priority < this.values[parentIdx].priority) {
            [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
        return this;
    }

    // Remove node by it's priority
    dequeue() {
        if(this.values.length === 0) return undefined;
        if(this.values.length === 1) return this.values.pop();

        const min = this.values[0];
        this.values[0] = this.values.pop();

        let currentIdx = 0;
        let length = this.values.length;

        while(true) {
            let leftChildIdx = 2 * currentIdx + 1;
            let rightChildIdx = 2 * currentIdx + 2;
            let smallest = currentIdx;

            if(leftChildIdx < length && this.values[leftChildIdx].priority < this.values[smallest].priority) {
                smallest = leftChildIdx;
            }

            if(rightChildIdx < length && this.values[rightChildIdx].priority < this.values[smallest].priority) {
                smallest = rightChildIdx;
            }

            if(currentIdx === smallest) break;

            [this.values[currentIdx], this.values[smallest]] = [this.values[smallest], this.values[currentIdx]];
            currentIdx = smallest;
        }
        return min
    }
}

const heap = new MinPriorityQueue();
heap.enqueue(12, 6);
heap.enqueue(9, 8);
heap.enqueue(2, 3);
heap.enqueue(23, 0);
heap.enqueue(3, 1);
console.log(heap.dequeue().priority);
console.log(heap.dequeue().priority);
console.log(heap.dequeue().priority);
console.log(heap.dequeue().priority);
console.log(heap.dequeue().priority);
console.log(heap.values);