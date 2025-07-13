class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    // Insert value, then buble min value
    insert(val) {
        this.values.push(val);
        let currentIndex = this.values.length - 1;
        let parentIdx = Math.floor((currentIndex - 1) / 2);

        while(parentIdx >= 0 && this.values[parentIdx] > this.values[currentIndex]) {
            [this.values[currentIndex], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIndex]];
            currentIndex = parentIdx;
            parentIdx = Math.floor((currentIndex - 1) / 2);
        }
        return this
    }
}

const heap = new MinBinaryHeap();
heap.insert(10);
heap.insert(0);
heap.insert(9);
heap.insert(11);
heap.insert(1);
console.log(heap.values)