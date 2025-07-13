class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add Vertex/Node
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        return this.adjacencyList;
    }

    // Add Edge
    addEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        } else {
            return "V1 or V2 deosn't found."
        }
    }

    // Remove Edge
    removeEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            for(let i = this.adjacencyList[v1].length - 1; i >= 0; i--) {
                if(this.adjacencyList[v1][i] === v2) {
                    this.adjacencyList[v1].splice(i, 1);
                }
            }

            for(let i = this.adjacencyList[v2].length - 1; i >= 0; i--) {
                if(this.adjacencyList[v2][i] === v1) {
                    this.adjacencyList[v2].splice(i, 1);
                }
            }
        } else {
            return "V1 or V2 not found."
        }
    }

    // Remove Vertex/Node
    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            for(let i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
                this.removeEdge(vertex, this.adjacencyList[vertex][i]);
            } 
        } else {
            return "Vertex not found."
        }
        delete this.adjacencyList[vertex];
    }

    // Depth First Search Interative
    DFS_Interative(vertex) {
        let result = [];
        let stack = [vertex];
        let visted = {};
        let currentVertex;

        visted[vertex] = true
        while(stack.length > 0) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visted[neighbor]) {
                    visted[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

graph.addEdge("A", "B");
graph.addEdge("D", "B");
graph.addEdge("C", "E");
graph.addEdge("E", "F");
graph.addEdge("D", "F");
graph.addEdge("F", "G");
graph.addEdge("D", "E");
console.log(graph.DFS_Interative("A"));
console.log(graph);