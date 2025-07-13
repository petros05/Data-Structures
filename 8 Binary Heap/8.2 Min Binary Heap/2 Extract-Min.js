class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let currentIdx = this.values.length - 1;
        let parentIdx = Math.floor((currentIdx - 1) / 2);

        while(this.values[parentIdx] > this.values[currentIdx]) {
            [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
        return this;
    }

    // Remove the min value (Extract Minumun value)
    extractMin() {
        if(!this.values) return undefined;
        if(this.values.length === 1) return this.values.pop();
        
        const min = this.values[0];
        this.values[0] = this.values.pop();

        let currentIdx = 0;
        let length = this.values.length - 1;

        while(true) {
            let leftChildIdx = currentIdx * 2 + 1;
            let rightChildIdx = currentIdx * 2 + 2;
            let smallest = currentIdx;

            if(leftChildIdx < length && this.values[leftChildIdx] < this.values[smallest]) {
                smallest = leftChildIdx;
            }

            if(rightChildIdx < length && this.values[rightChildIdx] < this.values[smallest]) {
                smallest = rightChildIdx;
            }

            if(currentIdx === smallest) break;

            [this.values[currentIdx], this.values[smallest]] = [this.values[smallest], this.values[currentIdx]];
            currentIdx = smallest;
        }
        return min;
    }
};

const heap = new MinBinaryHeap();
heap.insert(12);
heap.insert(20);
heap.insert(2);
heap.insert(4);
heap.insert(1);
heap.insert(0);
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.values);
