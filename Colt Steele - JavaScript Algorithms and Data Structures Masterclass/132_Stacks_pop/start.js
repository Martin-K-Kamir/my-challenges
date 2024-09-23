// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4409518#overview

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first = node;
            this.first.next = tmp;
        }

        return ++this.size;
    }
    pop() {}
}
