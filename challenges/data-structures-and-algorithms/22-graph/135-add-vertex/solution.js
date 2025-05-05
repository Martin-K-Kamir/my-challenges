// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424956#overview
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            return;
        }

        this.adjacencyList[vertex] = [];
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log(graph.adjacencyList["A"]); // []
console.log(graph.adjacencyList["B"]); // []
console.log(graph.adjacencyList["C"]); // []
