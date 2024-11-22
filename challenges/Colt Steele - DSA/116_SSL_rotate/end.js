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
    rotate(n) {
        if (!this.head || this.length === 0) return;

        if (n < 0) {
            n = this.length - Math.abs(n % this.length);
        } else {
            n = n % this.length;
        }

        if (n === 0) return;

        const leftHead = new Node(null);
        const rightHead = new Node(null);

        let leftTail = leftHead;
        let rightTail = rightHead;
        let current = this.head;

        for (let i = 0; i < n; i++) {
            rightTail.next = current;
            rightTail = rightTail.next;
            current = current.next;
        }

        for (let i = n; i < this.length; i++) {
            leftTail.next = current;
            leftTail = leftTail.next;
            current = current.next;
        }

        this.head = leftHead.next;
        this.tail = leftTail;
        this.tail.next = rightHead.next;
        this.tail = rightTail;
        this.tail.next = null;
    }
}
