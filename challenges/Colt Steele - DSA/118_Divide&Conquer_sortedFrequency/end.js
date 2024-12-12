// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410614#overview
function sortedFrequency(array, target) {
    function binarySearchFirstIndex(array, target, left = 0, right = array.length) {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        if ((mid === 0 || array[mid - 1] !== target) && array[mid] === target) {
            return mid;
        }
        else if (array[mid] >= target) {
            return binarySearchFirstIndex(array, target, left, mid - 1);
        }
        else {
            return binarySearchFirstIndex(array, target, mid + 1, right);
        }
    }
    function binarySearchLastIndex(array, target, left = 0, right = array.length) {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        if ((mid === array.length || array[mid + 1] !== target) &&
            array[mid] === target) {
            return mid;
        }
        else if (array[mid] <= target) {
            return binarySearchLastIndex(array, target, mid + 1, right);
        }
        else {
            return binarySearchLastIndex(array, target, left, mid - 1);
        }
    }
    const firstIndex = binarySearchFirstIndex(array, target);
    if (firstIndex === -1) {
        return -1;
    }
    const lastIndex = binarySearchLastIndex(array, target);
    if (lastIndex === -1) {
        return -1;
    }
    return lastIndex + 1 - firstIndex;
}
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
export {};
