// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/quiz/5871618#content

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    //   +===================================================+
    //   |                  WRITE YOUR CODE HERE             |
    //   | Description:                                      |
    //   | - This method partitions a linked list around a   |
    //   |   value `x`.                                      |
    //   | - It rearranges the nodes in such a way that all  |
    //   |   nodes less than `x` come before all nodes       |
    //   |   greater than or equal to `x`.                   |
    //   |                                                   |
    //   | Tips:                                             |
    //   | - We use two dummy nodes, `dummy1` and `dummy2`,  |
    //   |   to build two separate lists: one for elements   |
    //   |   smaller than `x` and one for elements greater   |
    //   |   or equal to `x`.                                |
    //   | - We then merge these two lists.                  |
    //   | - `prev1` and `prev2` are pointers to the last    |
    //   |   nodes of these lists.                           |
    //   | - The head of the resulting list is set as        |
    //   |   `dummy1.next`.                                  |
    //   +===================================================+

    partitionList(x) {
        const left = new Node(null);
        const right = new Node(null);
        let current = this.head;
        let leftNext = left;
        let rightNext = right;

        while (current != null) {
            if (current.value < x) {
                leftNext.next = current;
                leftNext = leftNext.next;
            } else {
                rightNext.next = current;
                rightNext = rightNext.next;
            }
            current = current.next;
        }

        this.head = left.next;
        leftNext.next = right.next;
        rightNext.next = null;
    }
}

//  +=====================================================+
//  |                                                     |
//  |          THE TEST CODE BELOW WILL PRINT             |
//  |              OUTPUT TO "USER LOGS"                  |
//  |                                                     |
//  |  Use the output to test and troubleshoot your code  |
//  |                                                     |
//  +=====================================================+

// Input:
// Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5

// Process:
// Values less than 5: 3, 2, 1
// Values greater than or equal to 5: 8, 5, 10

// Output:
// Linked List: 3 -> 2 -> 1 -> 8 -> 5 -> 10

const ll = new LinkedList(3);
ll.push(8);
ll.push(5);
ll.push(10);
ll.push(2);
ll.push(1);
ll.printList();
ll.partitionList(5);
ll.printList();

// // Helper function to create list from array
// function createListFromArray(arr) {
//     const ll = new LinkedList(arr[0]);
//     for (let i = 1; i < arr.length; i++) {
//         ll.push(arr[i]);
//     }
//     return ll;
// }

// // Helper function to compare list with array
// function listMatchesArray(ll, arr) {
//     let temp = ll.head;
//     let i = 0;
//     while (temp !== null && i < arr.length) {
//         if (temp.value !== arr[i]) {
//             return false;
//         }
//         temp = temp.next;
//         i++;
//     }
//     return temp === null && i === arr.length;
// }

// // Function to run a single test
// function runTest(testNum, description, ll, x, expectedArr) {
//     console.log("---------------------------------------");
//     console.log(`Test ${testNum}: ${description}`);
//     console.log("BEFORE: ");
//     ll.printList();
//     console.log("PARTITION: " + x);
//     ll.partitionList(x);
//     console.log("AFTER: ");
//     ll.printList();
//     console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
// }

// // Test 1: Basic partition
// let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
// runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// // Test 2: No elements to partition
// let ll2 = createListFromArray([4, 5, 6]);
// runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// // Test 3: All elements smaller
// let ll3 = createListFromArray([1, 2, 2]);
// runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// // Test 4: Single-element list
// let ll4 = createListFromArray([1]);
// runTest(4, "Single-element list", ll4, 3, [1]);

// // Test 5: All elements equal to partition
// let ll5 = createListFromArray([3, 3, 3]);
// runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

// console.log("---------------------------------------");
