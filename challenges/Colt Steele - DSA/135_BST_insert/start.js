// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424952#overview

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
    insert(value) {}
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.root.value); // 15
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.left.right.value); // 12

// const binarySearchTree1 = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12
