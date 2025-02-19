{
    function swap2(array, a, b) {
        [array[a], array[b]] = [array[b], array[a]];
    }
    function pivot2(array, pivotIndex = 0, endIndex = array.length) {
        let swapIndex = pivotIndex;
        for (let i = pivotIndex + 1; i <= endIndex; i++) {
            if (array[i] < array[pivotIndex]) {
                swapIndex++;
                swap2(array, swapIndex, i);
            }
        }
        swap2(array, pivotIndex, swapIndex);
        return swapIndex;
    }
    let myArray = [4, 6, 1, 7, 3, 2, 5];
    pivot2(myArray);
    console.log(myArray);
    /*
        EXPECTED OUTPUT:
        ----------------
        [ 2, 1, 3, 4, 6, 7, 5 ]
    
    */
}
export {};
