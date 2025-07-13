class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add Vertes/Node
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        return this.adjacencyList;
    }

    // Add Edges/Lines
    addEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        } else {
            return `Vertex ${v1} or Vertx ${v2} doesn't found`;
        }
    }

    // Remove Edges/Lines
    removeEdge(v1, v2) {
        if(v1 === v2) {
            return "same input";
        }
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            for(let i = this.adjacencyList[v1].length - 1; i >=0; i--) {
                if(this.adjacencyList[v1][i] === v2) {
                    this.adjacencyList[v1].splice(i, 1);
                }
            }

            for(let i = this.adjacencyList[v2].length - 1; i >=0; i--) {
                if(this.adjacencyList[v2][i] === v1) {
                    this.adjacencyList[v2].splice(i, 1);
                }
            }
        } else {
            return `Vertex ${v1} or Vertx ${v2} doesn't found`;
        }
    }

    // Remove Vertex/Node
    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            for(let i = this.adjacencyList[vertex].length - 1; i >= 0  ; i--) {
                this.removeEdge(vertex, this.adjacencyList[vertex][i]);
            }
            delete this.adjacencyList[vertex];
        } else {
            return `Vertex ${vertex} doesn't found`;
        }
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
graph.removeVertex(12);
console.log(graph.adjacencyList);