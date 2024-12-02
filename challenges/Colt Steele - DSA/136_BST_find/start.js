// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4408430#overview

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
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {}
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
const foundNode = binarySearchTree.find(20);
console.log(foundNode.value); // 20
console.log(foundNode.left); // null
console.log(foundNode.right); // null

const binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(15).insert(20).insert(10).insert(12);
const foundNode2 = binarySearchTree.find(120);
console.log(foundNode2); // undefined
