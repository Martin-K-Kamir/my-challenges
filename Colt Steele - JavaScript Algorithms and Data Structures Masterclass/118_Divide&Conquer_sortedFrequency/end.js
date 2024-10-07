function sortedFrequency(array, target) {
    function binarySearchFirst(array, target, start = 0, end = array.length) {
        if (start > end) {
            return -1;
        }

        const mid = Math.floor((start + end) / 2);

        if ((mid === 0 || array[mid - 1] !== target) && array[mid] === target) {
            return mid;
        } else if (array[mid] >= target) {
            // go left
            return binarySearchFirst(array, target, start, mid - 1);
        } else {
            // go right
            return binarySearchFirst(array, target, mid + 1, end);
        }
    }

    function binarySearchLast(array, target, start = 0, end = array.length) {
        if (start > end) {
            return -1;
        }

        const mid = Math.floor((start + end) / 2);

        if (
            (mid === array.length || array[mid + 1] !== target) &&
            array[mid] === target
        ) {
            return mid;
        } else if (array[mid] <= target) {
            // go right
            return binarySearchLast(array, target, mid + 1, end);
        } else {
            // go left
            return binarySearchLast(array, target, start, mid - 1);
        }
    }

    const firstIndex = binarySearchFirst(array, target);

    if (firstIndex === -1) {
        return firstIndex;
    }

    const lastIndex = binarySearchLast(array, target);
    return lastIndex - firstIndex + 1;
}
