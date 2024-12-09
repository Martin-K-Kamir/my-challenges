// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410990#overview
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {}
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B"); // A: ['B'], B: ['A']
graph.addEdge("A", "C"); // A: ['B', 'C'], C: ['A']
graph.addEdge("B", "D"); // B: ['A', 'D'], D: ['B']
graph.addEdge("C", "D"); // C: ['A', 'D'], D: ['B', 'C']

graph.removeEdge("B", "A");
graph.removeEdge("C", "D");

console.log(graph.adjacencyList["A"]); // ['C']
console.log(graph.adjacencyList["B"]); // ['D']
console.log(graph.adjacencyList["C"]); // ['A']
console.log(graph.adjacencyList["D"]); // ['B']
