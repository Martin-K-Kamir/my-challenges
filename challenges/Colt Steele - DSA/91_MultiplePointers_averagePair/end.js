// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410602#content
function averagePair(array, averageTarget) {
    if (array.length === 0) {
        return false;
    }
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const average = (array[left] + array[right]) / 2;
        if (average === averageTarget) {
            return true;
        }
        else if (average < averageTarget) {
            left++;
        }
        else {
            right--;
        }
    }
    return false;
}
// Time: O(N)
// Space: O(1)
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
export {};
