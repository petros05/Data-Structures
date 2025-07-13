class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Insertion methode
  insert(value) {
    this.values.push(value);
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (this.values[currentIndex] > this.values[parentIndex]) {
      [this.values[currentIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
    return this.values;
  }

  // Remove the max value (Extract Maximum value)
  extract_Max() {
    if (!this.values) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const max = this.values[0];
    this.values[0] = this.values.pop();

    let currentIndex = 0;
    let length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * currentIndex + 1;
      let rightChildIdx = 2 * currentIndex + 2;
      let largest = currentIndex;

      if(leftChildIdx < length && this.values[leftChildIdx] > this.values[largest]) {
        largest = leftChildIdx;
      } 

      if(rightChildIdx < length && this.values[rightChildIdx] > this.values[largest]) {
        largest = rightChildIdx;
      }

      if(largest === currentIndex) break;

      [this.values[largest], this.values[currentIndex]] = [this.values[currentIndex], this.values[largest]];

      currentIndex = largest;
    }

    return max
  }
}

const list = new MaxBinaryHeap();
list.insert(40);
list.insert(50);
list.insert(90);
list.insert(95);
list.insert(100);
list.insert(99);
list.insert(60);
console.log(list.values)
console.log(list.extract_Max());
console.log(list.values);

