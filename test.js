// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410602#content

function averagePair(array, avgTarget) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const avg = (array[start] + array[end]) / 2;

        if (avg === avgTarget) {
            return true;
        } else if (avg > avgTarget) {
            end--;
        } else {
            start++;
        }
    }

    return false;
}

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Time: O(N)
// Space: O(1)

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.log(averagePair([], 4)); // false
