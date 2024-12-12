// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410590#content
function maxSubarraySum(array, num) {
    if (array.length < num) {
        return null;
    }
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < num; i++) {
        currentSum += array[i];
    }
    maxSum = currentSum;
    for (let i = num; i < array.length; i++) {
        currentSum = currentSum - array[i - num] + array[i];
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}
// Time Complexity - O(N)
// Space Complexity - O(1)
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
export {};
