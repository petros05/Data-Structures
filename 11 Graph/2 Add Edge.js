class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add new Vertex/Node
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // Add Edges/lines
    addEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }

        // this.adjacencyList[v1].push(v2);
        // this.adjacencyList[v2].push(v1);
    }
}

const graph = new Graph();
graph.addVertex(12);
graph.addVertex(13);
graph.addVertex(10)
graph.addVertex(4);
graph.addVertex(90);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(12, 90);
graph.addEdge(12, 3);
graph.addEdge(12, 4);
graph.addEdge(4, 90);
graph.addEdge(3, 80);
console.log(graph.adjacencyList);