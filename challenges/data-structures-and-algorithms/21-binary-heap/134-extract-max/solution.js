// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409524#overview

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
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

    extractMax() {
        if (this.values.length === 0) {
            return null;
        }

        if (this.values.length === 1) {
            return this.values.pop();
        }

        const maxValue = this.values[0];
        this.values[0] = this.values.pop();
        this.sinkDown(0);

        return maxValue;
    }

    sinkDown(index) {
        let maxIndex = index;
        let size = this.values.length;

        while (true) {
            let leftIndex = this.leftChild(index);
            let rightIndex = this.rightChild(index);

            if (
                leftIndex < size &&
                this.values[leftIndex] > this.values[maxIndex]
            ) {
                maxIndex = leftIndex;
            }

            if (
                rightIndex < size &&
                this.values[rightIndex] > this.values[maxIndex]
            ) {
                maxIndex = rightIndex;
            }

            if (maxIndex !== index) {
                this.swap(index, maxIndex);
                index = maxIndex;
            } else {
                return;
            }
        }
    }
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
