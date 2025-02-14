// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/quiz/5708366#content

class HashTable {
    constructor(size) {
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

}



let myHashTable = new HashTable();
myHashTable.printTable();


/*
    EXPECTED OUTPUT:
    ----------------
    0 :  undefined
    1 :  undefined
    2 :  undefined
    3 :  undefined
    4 :  undefined
    5 :  undefined
    6 :  undefined

*/