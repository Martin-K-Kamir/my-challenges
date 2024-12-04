// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424938#overview

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {}
}

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
console.log(binaryHeap.values[0]); // 1

binaryHeap.insert(2);
console.log(binaryHeap.values[0]); // 2

console.log(binaryHeap.values); // [2, 1]

binaryHeap.insert(3);
console.log(binaryHeap.values[0]); // 3

console.log(binaryHeap.values); // [3, 1, 2]

binaryHeap.insert(4);
console.log(binaryHeap.values[0]); // 4

console.log(binaryHeap.values); // [4, 3, 2, 1]

binaryHeap.insert(5);
console.log(binaryHeap.values[0]); // 5

console.log(binaryHeap.values); // [5, 4, 2, 1, 3]

binaryHeap.insert(6);
console.log(binaryHeap.values[0]); // 6

console.log(binaryHeap.values); // [6, 4, 5, 1, 3, 2]
