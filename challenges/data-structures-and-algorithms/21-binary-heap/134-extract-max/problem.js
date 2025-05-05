// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409524#overview

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(a, b) {
        [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
    }

    insert(value) {
        this.values.push(value);
        let current = this.values.length - 1;

        while (
            current > 0 &&
            this.values[current] > this.values[this.parent(current)]
        ) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    extractMax() {}
}

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.extractMax();
console.log(binaryHeap.values[0]); // 5

console.log(binaryHeap.values); // [5,4,2,1,3])

binaryHeap.extractMax();
console.log(binaryHeap.values); // [4,3,2,1])

binaryHeap.extractMax();
console.log(binaryHeap.values); // [3,1,2])
