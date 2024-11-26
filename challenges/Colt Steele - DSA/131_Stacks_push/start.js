// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424882#overview

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
    push(val) {}
}

const stack = new Stack();

stack.push(10); // 1
console.log(stack.first.value); // 10
console.log(stack.last.value); // 10
stack.push(100);
console.log(stack.first.value); // 100
console.log(stack.last.value); // 10
stack.push(1000);
console.log(stack.first.value); // 1000
console.log(stack.last.value); // 10

const stack2 = new Stack();

stack2.push(10); // 1
console.log(stack2.size); // 1
stack2.push(100); // 2
console.log(stack2.size); // 2
stack2.push(1000); // 3
console.log(stack2.size); // 3
