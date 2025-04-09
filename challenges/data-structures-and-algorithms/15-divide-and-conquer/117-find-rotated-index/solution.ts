// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410610#overview

function findRotatedIndex(
    arr: number[],
    target: number,
    left = 0,
    right = arr.length - 1
) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
        return mid;
    }

    // Check if the left part of the array is sorted
    if (arr[left] <= arr[mid]) {
        // Check if the target is within the sorted left part
        if (arr[left] <= target && target < arr[mid]) {
            // If the target is within the sorted left part, search in the left part
            return findRotatedIndex(arr, target, left, mid - 1);
        } else {
            // If the target is not within the sorted left part, search in the right part
            return findRotatedIndex(arr, target, mid + 1, right);
        }
    } else {
        // If the left part is not sorted, then the right part must be sorted
        // Check if the target is within the sorted right part
        if (arr[mid] < target && target <= arr[right]) {
            // If the target is within the sorted right part, search in the right part
            return findRotatedIndex(arr, target, mid + 1, right);
        } else {
            // If the target is not within the sorted right part, search in the left part
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
