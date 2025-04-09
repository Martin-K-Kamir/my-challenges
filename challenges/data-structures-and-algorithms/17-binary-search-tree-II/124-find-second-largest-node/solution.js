// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4413078#overview

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        // only accept numbers....watch out since NaN is typeof number!
        if (typeof value === "number" && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node!
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            } else {
                // current variable used for traversal, just like linked lists!
                var current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left
                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }
                        // otherwise, keep moving on!
                        else {
                            current = current.left;
                        }
                    } else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                    // otherwise it must be a duplicate so let's get out of here
                    else {
                        return "duplicate!";
                    }
                }
            }
        } else return "Please insert a number";
    }

    findSecondLargest() {
        if (this.root?.right == null) {
            return;
        }

        const maxValues = [0, 0];
        let current = this.root;

        while (current != null) {
            if (current.value > maxValues[1]) {
                maxValues[0] = maxValues[1];
                maxValues[1] = current.value;
            }
            current = current.right;
        }

        return maxValues[0];
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.findSecondLargest()); // returns 15

const binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(10);
console.log(binarySearchTree2.findSecondLargest()); // returns undefined
