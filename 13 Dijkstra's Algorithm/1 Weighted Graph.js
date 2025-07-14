class Node {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
        return this
    }

    addEdge(v1, v2, weight) {
        if (v1 === v2) return undefined
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push({vertex: v2, weight});
            this.adjacencyList[v2].push({vertex: v1, weight});
        } else {
            return undefined;
        }
    };

};

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 1);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.adjacencyList)