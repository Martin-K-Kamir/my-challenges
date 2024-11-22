"use strict";
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425982#overview
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}
function isPalindrome2(str, left = 0, right = str.length - 1) {
    if (str[left] !== str[right]) {
        return false;
    }
    if (left >= right) {
        return true;
    }
    return isPalindrome2(str, left + 1, right - 1);
}
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
