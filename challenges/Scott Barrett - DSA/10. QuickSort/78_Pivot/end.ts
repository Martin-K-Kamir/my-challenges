{
    function swap<T>(array: T[], a: number, b: number) {
        [array[a], array[b]] = [array[b], array[a]];
    }

    function pivot(array: number[], pivotIndex = 0, endIndex = array.length) {
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

    let myArray = [4, 6, 1, 7, 3, 2, 5];
    pivot(myArray);
    console.log(myArray);

    /*
        EXPECTED OUTPUT:
        ----------------
        [ 2, 1, 3, 4, 6, 7, 5 ]
    
    */
}
