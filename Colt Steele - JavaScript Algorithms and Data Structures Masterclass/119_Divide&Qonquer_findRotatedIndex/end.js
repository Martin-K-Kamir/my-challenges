function findRotatedIndex(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
        return mid;
    }

    if (arr[start] <= arr[mid]) {
        if (arr[start] <= target && target < arr[mid]) {
            return findRotatedIndex(arr, target, start, mid - 1);
        } else {
            return findRotatedIndex(arr, target, mid + 1, end);
        }
    } else {
        if (arr[mid] < target && target <= arr[end]) {
            return findRotatedIndex(arr, target, mid + 1, end);
        } else {
            return findRotatedIndex(arr, target, start, mid - 1);
        }
    }
}
