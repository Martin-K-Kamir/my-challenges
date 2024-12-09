// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410992#overview

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {}
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.adjacencyList["A"]); // contains both ('B', 'C')
console.log(graph.adjacencyList["B"]); // contains both ('A', 'D')
console.log(graph.adjacencyList["C"]); // contains both ('A', 'D')
console.log(graph.adjacencyList["D"]); // contains both ('C', 'B')
