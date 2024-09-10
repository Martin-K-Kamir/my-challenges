function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]
        let j = i - 1;

        while (j >= 0 && array[j] > currentValue) {
            array[j + 1] = array[j]
            j--;
        }

        array[j + 1] = currentValue
    }

    return array
}

let myArray = [4, 2, 6, 5, 1, 3];
insertionSort(myArray);
console.log(myArray);


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/