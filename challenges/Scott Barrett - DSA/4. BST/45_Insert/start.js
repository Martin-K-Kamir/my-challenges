// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/quiz/5707592#content

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {

    }

}



let myBST = new BST();

myBST.insert(2);
myBST.insert(1);
myBST.insert(3);

/*
    THE LINES ABOVE CREATE THIS TREE:
                 2
                / \
               1   3
*/


console.log("Root:", myBST.root.value);
console.log("\nRoot->Left:", myBST.root.left.value);
console.log("\nRoot->Right:", myBST.root.right.value);


/*
    EXPECTED OUTPUT:
    ----------------
    Root: 2

    Root->Left: 1

    Root->Right: 3

*/

