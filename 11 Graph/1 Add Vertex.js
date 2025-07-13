class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add new Vertex/Node
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
        return this
    }
}

const graph = new Graph();
graph.addVertex(4);
graph.addVertex(3);
graph.addVertex(2);
graph.addVertex(5);
console.log(graph.adjacencyList)