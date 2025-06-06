function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }

    return array;
}


let myArray = [4, 2, 6, 5, 1, 3];
selectionSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/