(() => {
    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424882#overview

    class Node<T> {
        public next: null | Node<T> = null;

        constructor(public value: T) {}
    }

    class Stack<T> {
        public first: null | Node<T> = null;
        public last: null | Node<T> = null;
        public size = 0;

        push(value: T) {
            const newNode = new Node(value);

            if (!this.first) {
                this.first = newNode;
                this.last = newNode;
            } else {
                newNode.next = this.first;
                this.first = newNode;
            }

            this.size++;
        }
    }

    const stack = new Stack();

    stack.push(10); // 1
    console.log(stack.first?.value); // 10
    console.log(stack.last?.value); // 10
    stack.push(100);
    console.log(stack.first?.value); // 100
    console.log(stack.last?.value); // 10
    stack.push(1000);
    console.log(stack.first?.value); // 1000
    console.log(stack.last?.value); // 10

    const stack2 = new Stack();

    stack2.push(10); // 1
    console.log(stack2.size); // 1
    stack2.push(100); // 2
    console.log(stack2.size); // 2
    stack2.push(1000); // 3
    console.log(stack2.size); // 3
})();
