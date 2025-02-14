// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/quiz/6078336#content
//   +===================================================+
//   |               WRITE YOUR CODE HERE                |
//   | Description:                                      |
//   | - This function rotates an array `nums` to the    |
//   |   right by `k` steps.                             |
//   |                                                   |
//   | Tips:                                             |
//   | - The function uses three reverse operations to   |
//   |   achieve the rotation in place.                  |
//   | - First, we limit `k` to the size of the array.   |
//   | - Then, we reverse the first and second parts of  |
//   |   the array separately.                           |
//   | - Finally, we reverse the whole array.            |
//   +===================================================+
function rotate(arr, k) {
    const n = arr.length;
    k = ((k % n) + n) % n;
    if (k === 0) {
        return arr;
    }
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
    return arr;
}
console.log(rotate([1, 2, 3], 0));
console.log(rotate([1, 2, 3], 1));
console.log(rotate([1, 2, 3], 2));
console.log(rotate([1, 2, 3], 3));
console.log(rotate([1, 2, 3], 4));
console.log(rotate([1, 2, 3], 5));
console.log("---------------");
console.log(rotate([1, 2, 3], -0));
console.log(rotate([1, 2, 3], -1));
console.log(rotate([1, 2, 3], -2));
console.log(rotate([1, 2, 3], -3));
console.log(rotate([1, 2, 3], -4));
console.log(rotate([1, 2, 3], -5));
export {};
