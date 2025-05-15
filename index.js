// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4413070#overview

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr.join(" -> "));
    }
    rotate(k) {
        const n = this.length;

        k = ((k % n) + n) % n;

        if (k === 0) {
            return;
        }

        const dummy = new Node(null);
        dummy.next = this.head;
        let current = dummy;

        for (let i = 0; i < k; i++) {
            current = current.next;
        }

        this.head = current.next;
        current.next = null;
        this.tail.next = dummy.next;
        this.tail = current;
    }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.print();
list.rotate(2);
list.print();
