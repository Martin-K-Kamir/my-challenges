(() => {
    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424886#overview
    class Node {
        value;
        next = null;
        constructor(value) {
            this.value = value;
        }
    }
    class Queue {
        first = null;
        last = null;
        size = 0;
        enqueue(value) {
            const newNode = new Node(value);
            if (this.last === null || this.first === null) {
                this.first = newNode;
                this.last = newNode;
            }
            else {
                this.last.next = newNode;
                this.last = newNode;
            }
            return ++this.size;
        }
    }
    const queue = new Queue();
    queue.enqueue(10); // 1
    queue.size; // 1
    queue.enqueue(100); // 2
    queue.size; // 2
    queue.enqueue(1000); // 3
    queue.size; // 3
})();
export {};
