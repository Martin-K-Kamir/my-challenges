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

const stack = new Stack();
stack.push(10);
stack.push(100);
stack.push(1000);
console.log(stack.pop()); // 1000
console.log(stack.size); // 2
console.log(stack.pop()); // 100
console.log(stack.size); // 1
console.log(stack.pop()); // 10
console.log(stack.size); // 0
console.log(stack.pop()); // null
console.log(stack.size); // 0
