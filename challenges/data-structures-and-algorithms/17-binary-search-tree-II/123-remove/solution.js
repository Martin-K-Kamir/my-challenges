// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424944#overview

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

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            // Case 1: No children (leaf node)
            if (node.left === null && node.right === null) {
                return null;
            }

            // Case 2: One child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Case 3: Two children
            // Find the minimum value in the right subtree
            const minRight = this._findMin(node.right);
            node.value = minRight.value;
            node.right = this._removeNode(node.right, minRight.value);
            return node;
        }
    }

    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

//        15
//       /  \
//      10  20
//     /  \   \
//    1   12  50
//     \
//      5
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value); // 20
// console.log(binarySearchTree.root.right.right); // null

// binarySearchTree.remove(5);
// console.log(binarySearchTree.root.left.left.value); // 1
// console.log(binarySearchTree.root.left.left.right); // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);

// binarySearchTree.remove(1);
// console.log(binarySearchTree.root.left.left.value); // 5
// console.log(binarySearchTree.root.left.left.left); // null
// console.log(binarySearchTree.root.left.left.right); // null

// binarySearchTree.remove(20);
// console.log(binarySearchTree.root.right.value); // 50
// console.log(binarySearchTree.root.right.right); // null
// console.log(binarySearchTree.root.right.left); // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50)
    .insert(60)
    .insert(30)
    .insert(25)
    .insert(23)
    .insert(24)
    .insert(70);

binarySearchTree.remove(10);
console.log(binarySearchTree.root.left.value); // 12
console.log(binarySearchTree.root.left.left.value); // 1
console.log(binarySearchTree.root.left.left.right.value); // 5

// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value); // 20
// console.log(binarySearchTree.root.right.right.value); // 60
// console.log(binarySearchTree.root.right.right.left.value); // 30

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(22)
//     .insert(49)
//     .insert(85)
//     .insert(66)
//     .insert(95)
//     .insert(90)
//     .insert(100)
//     .insert(88)
//     .insert(93)
//     .insert(89);

// binarySearchTree.remove(85);
// console.log(binarySearchTree.root.right.right.value); // 88
// console.log(binarySearchTree.root.right.right.right.left.left.value); // 89
