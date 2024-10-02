class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
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
    shift() {
        if (!this.head) {
            return undefined;
        }
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }

        cur = this.head;
        var count = 0;
        for (
            var cur = this.head;
            cur !== null && count != index;
            cur = cur.next
        ) {
            count++;
        }

        return cur;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const prev = this.get(index - 1);
        const nodeToRemove = prev.next;

        prev.next = nodeToRemove.next;
        nodeToRemove.next = null;

        this.length--;
        return nodeToRemove;
    }
}
