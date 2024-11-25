"use strict";
{
    function swap(array, a, b) {
        [array[a], array[b]] = [array[b], array[a]];
    }
    function pivot(array, pivotIndex = 0, endIndex = array.length) {
        let swapIndex = pivotIndex;
        for (let i = pivotIndex + 1; i <= endIndex; i++) {
            if (array[i] < array[pivotIndex]) {
                swapIndex++;
                swap(array, swapIndex, i);
            }
        }
        swap(array, pivotIndex, swapIndex);
        return swapIndex;
    }
    function quickSort(array, left = 0, right = array.length) {
        if (left < right) {
            const pivotIndex = pivot(array, left, right);
            quickSort(array, left, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, right);
        }
        return array;
    }
    let myArray = [4, 6, 1, 7, 3, 2, 5];
    quickSort(myArray);
    console.log(myArray);
    /*
        EXPECTED OUTPUT:
        ----------------
        [ 1, 2, 3, 4, 5, 6 ]
    
    */
}
