// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410590#content

function maxSubarraySum(arr, num) {
    let currentSum = 0;
    let maxSum = 0;

    for (let i = 0; i < num; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    for (let i = num; i < arr.length; i++) {
        currentSum = currentSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Time Complexity - O(N)
// Space Complexity - O(1)
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
