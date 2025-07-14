// Minimum Priority Queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ vertex: val, priority });
    let currentIdx = this.values.length - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (
      parentIdx >= 0 &&
      this.values[parentIdx].priority > this.values[currentIdx].priority
    ) {
      [this.values[currentIdx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[currentIdx],
      ];
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
    return this;
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const min = this.values[0];
    this.values[0] = this.values.pop();

    let currentIdx = 0;
    let length = this.values.length;
    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;
      let smallest = currentIdx;

      if (
        leftChildIdx < length &&
        this.values[leftChildIdx].priority < this.values[smallest].priority
      ) {
        smallest = leftChildIdx;
      }

      if (
        rightChildIdx < length &&
        this.values[rightChildIdx].priority < this.values[smallest].priority
      ) {
        smallest = rightChildIdx;
      }

      if (smallest === currentIdx) break;

      [this.values[currentIdx], this.values[smallest]] = [
        this.values[smallest],
        this.values[currentIdx],
      ];
      currentIdx = smallest;
    }
    return min;
  }
}

// Weigted Graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add new Vertex/Node
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  // Add new Edge/Lines
  addEdge(v1, v2, weight) {
    if (v1 === v2) return undefined;
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ vertex: v2, weight });
      this.adjacencyList[v2].push({ vertex: v1, weight });
    } else {
      return "V1 or V2 not found!";
    }
    return this;
  }

  // Dijkstra's Algorithm
  dijkstrasAlgorithm(start, end) {
    let distance = {};
    let previous = {};
    const queue = new PriorityQueue();
    let path = [];
    let smallest;

    // Set the distance of all vertices to infinity, except start
    for (let vertex in this.adjacencyList) {
        if (vertex === start) {
            distance[vertex] = 0;
            queue.enqueue(vertex, 0);
        } else {
            distance[vertex] = Infinity;
            queue.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    // As long as there is a node in the queue
    while (queue.values.length) {
        smallest = queue.dequeue().vertex;
        if (smallest === end) {
            // Build path to return
            while (previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            path.push(start);
            path.reverse();
            return path;
        }
        if (smallest || distance[smallest] !== Infinity) {
            for (let neighbor of this.adjacencyList[smallest]) {
                // Find neighboring node
                let candidate = distance[smallest] + neighbor.weight;
                let nextNeighbor = neighbor.vertex;
                if (candidate < distance[nextNeighbor]) {
                    // Updating new smallest distance to neighbor
                    distance[nextNeighbor] = candidate;
                    // Updating previous - How we got to neighbor
                    previous[nextNeighbor] = smallest;
                    // Enqueue in priority queue with new priority
                    queue.enqueue(nextNeighbor, candidate);
                }
            }
        }
    }
    return []; // No path found
}
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.dijkstrasAlgorithm("A", "E"));
// console.log(graph.adjacencyList);
