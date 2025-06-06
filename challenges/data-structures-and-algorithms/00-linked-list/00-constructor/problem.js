// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/quiz/5701818#content

// CREATE NODE CLASS HERE //
//                        //
//                        //
//                        //
//                        //
////////////////////////////

class LinkedList {
    // CREATE LL CONSTRUCTOR HERE //
    //                            //
    //                            //
    //                            //
    //                            //
    ////////////////////////////////


    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}



let myLinkedList = new LinkedList(4);

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/