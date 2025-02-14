// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/quiz/5708460#content

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

    /// WRITE ADDVERTEX METHOD HERE ///
    //                               //
    //                               //
    //                               //
    //                               //
    ///////////////////////////////////

    addVertex(vertex) {

    }
}



let myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.printGraph();


/*
    EXPECTED OUTPUT:
    ----------------
    {
      A: [],
      B: []
    }

*/

