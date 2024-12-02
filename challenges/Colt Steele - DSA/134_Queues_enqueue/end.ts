(() => {
    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424886#overview

    class Node<T> {
        next: Node<T> | null = null;
        constructor(public value: T) {}
    }

    class Queue<T> {
        first: Node<T> | null = null;
        last: Node<T> | null = null;
        size = 0;

        enqueue(value: T) {
            const newNode = new Node(value);

            if (this.last === null || this.first === null) {
                this.first = newNode;
                this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }

            return ++this.size;
        }
    }

    const queue = new Queue<number>();
    queue.enqueue(10); // 1
    queue.size; // 1
    queue.enqueue(100); // 2
    queue.size; // 2
    queue.enqueue(1000); // 3
    queue.size; // 3
})();
