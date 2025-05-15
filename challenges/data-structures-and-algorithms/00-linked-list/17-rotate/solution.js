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

    // this solution rotates from the end
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

    // this solution rotates from the end
    rotate2(k) {
        const n = this.length;
        k = ((k % n) + n) % n;

        if (k === 0) {
            return;
        }

        const left = new Node(null);
        let leftCurrent = left;
        const right = new Node(null);
        let rightCurrent = right;

        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (i >= k) {
                leftCurrent.next = current;
                leftCurrent = leftCurrent.next;
            } else {
                rightCurrent.next = current;
                rightCurrent = rightCurrent.next;
            }

            current = current.next;
        }

        this.head = left.next;
        leftCurrent.next = right.next;
        rightCurrent.next = null;
        this.tail = rightCurrent;
    }

    // this solution rotates from the start
    rotate3(k) {
        const n = this.length;
        k = ((k % n) + n) % n;

        if (k === 0) {
            return;
        }

        const left = new Node(null);
        let leftCurrent = left;
        const right = new Node(null);
        let rightCurrent = right;

        let current = this.head;

        for (let i = 1; i <= this.length; i++) {
            if (n - k < i) {
                leftCurrent.next = current;
                leftCurrent = leftCurrent.next;
            } else {
                rightCurrent.next = current;
                rightCurrent = rightCurrent.next;
            }

            current = current.next;
        }

        this.head = left.next;
        leftCurrent.next = right.next;
        rightCurrent.next = null;
        this.tail = rightCurrent;
    }

    // the most simplest logic and fastest
    rotate4(k) {
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
