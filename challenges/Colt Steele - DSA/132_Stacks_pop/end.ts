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

        pop() {
            if (this.size === 0) {
                return null;
            }

            const nodeToRemove = this.first;

            if (this.size === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first?.next ?? null;
            }

            this.size--;
            return nodeToRemove?.value;
        }
    }

    const stack = new Stack<number>();
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
})();
