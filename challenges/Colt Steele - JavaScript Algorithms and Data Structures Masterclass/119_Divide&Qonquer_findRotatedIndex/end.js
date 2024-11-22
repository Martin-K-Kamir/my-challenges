function findRotatedIndex(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
        return mid;
    }

    // Check if the left part of the array is sorted
    if (arr[start] <= arr[mid]) {
        // Check if the target is within the sorted left part
        if (arr[start] <= target && target < arr[mid]) {
            // If the target is within the sorted left part, search in the left part
            return findRotatedIndex(arr, target, start, mid - 1);
        } else {
            // If the target is not within the sorted left part, search in the right part
            return findRotatedIndex(arr, target, mid + 1, end);
        }
    } else {
        // If the left part is not sorted, then the right part must be sorted
        // Check if the target is within the sorted right part
        if (arr[mid] < target && target <= arr[end]) {
            // If the target is within the sorted right part, search in the right part
            return findRotatedIndex(arr, target, mid + 1, end);
        } else {
            // If the target is not within the sorted right part, search in the left part
            return findRotatedIndex(arr, target, start, mid - 1);
        }
    }
}
