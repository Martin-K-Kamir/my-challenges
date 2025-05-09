// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424964#overview

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
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    _depthFirstSearchRecursion(start) {
        const seen = new Set();

        const traverse = node => {
            if (seen.has(node)) {
                return;
            }

            seen.add(node);
            this.adjacencyList[node].forEach(neighbor => {
                traverse(neighbor);
            });
        };

        traverse(start);

        return Array.from(seen);
    }

    _depthFirstSearchIterative(start) {
        const stack = [];
        const seen = new Set();
        stack.push(start);

        while (stack.length > 0) {
            const node = stack.pop(stack);

            if (seen.has(node)) {
                continue;
            }

            seen.add(node);

            this.adjacencyList[node].forEach(neighbor => {
                stack.push(neighbor);
            });
        }

        return Array.from(seen);
    }

    depthFirstSearch(start) {
        // return this._depthFirstSearchRecursion(start);
        return this._depthFirstSearchIterative(start);
    }
}

const graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

console.log(graph.adjacencyList);
console.log(graph.depthFirstSearch("S"));

/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/
