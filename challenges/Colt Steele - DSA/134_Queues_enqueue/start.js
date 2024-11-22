// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424886#overview

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue() {}
}
