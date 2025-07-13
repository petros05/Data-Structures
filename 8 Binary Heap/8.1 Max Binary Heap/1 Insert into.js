class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // Insert value, then buble max value
    insert(value) {
        this.values.push(value)
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)
        while(this.values[index] > this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
}

const list = new MaxBinaryHeap();
list.insert(44);
list.insert(15);
list.insert(100);
list.insert(45);
list.insert(53);
list.insert(40);
list.insert(70);
list.insert(99);
list.insert(31);
console.log(list.values);

