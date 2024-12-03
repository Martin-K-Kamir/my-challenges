(() => {
    function findRotatedIndex(
        arr: number[],
        target: number,
        left = 0,
        right = arr.length
    ) {
        if (left > right) {
            return -1;
        }

        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[left] <= target) {
            if (arr[left] <= target && target < arr[mid]) {
                return findRotatedIndex(arr, target, left, mid - 1);
            } else {
                return findRotatedIndex(arr, target, mid + 1, right);
            }
        } else {
            if (arr[mid] < target && target <= arr[right]) {
                return findRotatedIndex(arr, target, mid + 1, right);
            } else {
                return findRotatedIndex(arr, target, left, mid - 1);
            }
        }
    }

    // Time Complexity - O(log n)
    // Space Complexity - O(1)
    console.log(findRotatedIndex([3, 4, 1, 2], 3)); // 0
    console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
    console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
    console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
    console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
    console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
})();
