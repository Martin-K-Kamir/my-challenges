function countZeroes(array) {
    function binarySearchZero(array, start = 0, end = array.length) {
        if (start > end) {
            return -1;
        }

        const mid = Math.floor((start + end) / 2);

        if ((mid === 0 || array[mid - 1] === 1) && array[mid] === 0) {
            return mid;
        } else if (array[mid] === 1) {
            return binarySearchZero(array, mid + 1, end);
        } else {
            return binarySearchZero(array, start, mid - 1);
        }
    }

    const indexOfZero = binarySearchZero(array);

    if (indexOfZero === -1) {
        return 0;
    }

    return array.length - indexOfZero;
}
