class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add new Vertex/Node
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this
    }

    // Add Edges/lines
    addEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        } else {
            return "Vertex 1 or Vertex 2 doesn't found!!!!"
        }
        return this.adjacencyList;
    }

    // Remove Edges/Lines
    removeEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            for(let i = this.adjacencyList[v1].length - 1; i >=0 ; i--) {
                if(this.adjacencyList[v1][i] === v2) {
                    this.adjacencyList[v1].splice(i, 1);
                }
            }

            for(let i = this.adjacencyList[v2].length - 1; i >=0  ; i--) {
                if(this.adjacencyList[v2][i] === v1) {
                    this.adjacencyList[v2].splice(i, 1);
                }
            }
        } else {
            return "Vertex 1 or Vertex 2 doesn't found."
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
graph.addEdge(12, 13);
graph.addEdge(12, 90);
graph.addEdge(12, 10);
graph.addEdge(2, 90);
graph.addEdge(2, 10);
graph.addEdge(13, 3);
graph.addEdge(4, 3);
// console.log(graph.removeEdge(12, 13));
// console.log(graph.removeEdge(4, 3));
console.log(graph.adjacencyList);


// let arr = [1,2,3,4,5,6,7];
// arr.splice(1,2);
// console.log(arr);