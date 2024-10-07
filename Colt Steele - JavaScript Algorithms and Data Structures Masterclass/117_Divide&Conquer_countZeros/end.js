function countZeroes(arr) {
    function findFirstZero(arr, start, end) {
        if (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
                return mid;
            } else if (arr[mid] === 1) {
                return findFirstZero(arr, mid + 1, end);
            } else {
                return findFirstZero(arr, start, mid - 1);
            }
        }

        return -1;
    }

    const firstZeroIndex = findFirstZero(arr, 0, arr.length - 1);

    if (firstZeroIndex === -1) {
        return 0;
    }

    return arr.length - firstZeroIndex;
}
