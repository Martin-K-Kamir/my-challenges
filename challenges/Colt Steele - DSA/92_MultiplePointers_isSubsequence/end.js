// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410596#content
function isSubsequence(substring, string) {
    let i = 0;
    let j = 0;
    while (i <= string.length) {
        if (j >= substring.length) {
            return true;
        }
        if (substring[j] === string[i]) {
            j++;
        }
        i++;
    }
    return false;
}
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
export {};
