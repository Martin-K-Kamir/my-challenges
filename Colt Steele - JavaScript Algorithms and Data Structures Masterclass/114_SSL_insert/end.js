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
        var newNode = new Node(val);
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
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        const newNode = new Node(value);
        const prev = this.get(index - 1);
        const next = prev.next;

        prev.next = newNode;
        newNode.next = next;

        this.length++;
        return true;
    }
}
