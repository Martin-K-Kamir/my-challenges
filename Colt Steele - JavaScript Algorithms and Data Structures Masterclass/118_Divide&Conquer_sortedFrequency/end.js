function sortedFrequency(arr, target) {
    function findFirstIndex(arr, target, start, end) {
        if (start > end) return -1;

        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target && (mid === 0 || arr[mid - 1] !== target)) {
            return mid;
        } else if (arr[mid] >= target) {
            return findFirstIndex(arr, target, start, mid - 1);
        } else {
            return findFirstIndex(arr, target, mid + 1, end);
        }
    }

    function findLastIndex(arr, target, start, end) {
        if (start > end) return -1;

        const mid = Math.floor((start + end) / 2);

        if (
            arr[mid] === target &&
            (mid === arr.length - 1 || arr[mid + 1] !== target)
        ) {
            return mid;
        } else if (arr[mid] <= target) {
            return findLastIndex(arr, target, mid + 1, end);
        } else {
            return findLastIndex(arr, target, start, mid - 1);
        }
    }

    const firstIndex = findFirstIndex(arr, target, 0, arr.length - 1);
    if (firstIndex === -1) return -1;

    const lastIndex = findLastIndex(arr, target, 0, arr.length - 1);
    return lastIndex - firstIndex + 1;
}
