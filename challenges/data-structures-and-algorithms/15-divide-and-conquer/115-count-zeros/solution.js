// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410620#overview
{
    function countZeroes(array) {
        function binarySearchZeros(array, start = 0, end = array.length) {
            if (start > end) {
                return -1;
            }
            let mid = Math.floor((start + end) / 2);
            if ((mid === 0 || array[mid - 1] !== 0) && array[mid] === 0) {
                return mid;
            }
            else if (array[mid] > 0) {
                return binarySearchZeros(array, mid + 1, end);
            }
            else {
                return binarySearchZeros(array, start, mid - 1);
            }
        }
        const index = binarySearchZeros(array, 0);
        if (index === -1) {
            return 0;
        }
        return array.length - index;
    }
    console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
    console.log(countZeroes([1, 0, 0, 0, 0])); // 4
    console.log(countZeroes([0, 0, 0])); // 3
    console.log(countZeroes([1, 1, 1, 1])); // 0
}
export {};
