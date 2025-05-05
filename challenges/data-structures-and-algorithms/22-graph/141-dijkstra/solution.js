// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424966#overview

function WeightedGraph() {
    Graph.call(this);
}

WeightedGraph.prototype = Object.create(Graph.prototype);
WeightedGraph.prototype.constructor = WeightedGraph;

WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
};

WeightedGraph.prototype.Dijkstra = function (start, end) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};
    const path = [];

    // Initialize distances and previous
    for (let vertex in this.adjacencyList) {
        if (vertex === start) {
            distances[vertex] = 0;
            priorityQueue.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            priorityQueue.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
        const current = priorityQueue.dequeue().val;

        // If we reach the end, build the path
        if (current === end) {
            let temp = current;
            while (temp) {
                path.unshift(temp);
                temp = previous[temp];
            }
            break;
        }

        // Skip if the current vertex has no connections
        if (!this.adjacencyList[current]) continue;

        // Update distances and enqueue neighbors
        for (let neighbor of this.adjacencyList[current]) {
            const candidate = distances[current] + neighbor.weight;

            if (candidate < distances[neighbor.node]) {
                distances[neighbor.node] = candidate;
                previous[neighbor.node] = current;
                priorityQueue.enqueue(neighbor.node, candidate);
            }
        }
    }

    return path;
};

/***
 *** Use Graph as a constructor for WeightedGraph to inherit from!
 ***
 ***/

function Graph() {
    this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
    let total = 0;

    Object.values(this.adjacencyList).forEach(list => {
        total += list.length;
    });

    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
    this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
    while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
};

/***
 *** Use the following as a PriorityQueue (it's a min heap)!
 ***
 ***/
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);

g.addEdge("Z", "Q", 2);

g.addEdge("C", "G", 4);

g.addEdge("D", "Q", 8);

g.addEdge("E", "H", 1);

g.addEdge("H", "Q", 3);

g.addEdge("Q", "C", 6);

g.addEdge("G", "Q", 9);

console.log(g.Dijkstra("A", "E")); // ["A", "Z", "Q", "H", "E"]
console.log(g.Dijkstra("A", "Q")); // ["A", "Z", "Q"]
console.log(g.Dijkstra("A", "G")); // ["A", "C", "G"]
console.log(g.Dijkstra("A", "D")); // ["A", "Z", "Q", "D"]
