"use strict";
function isSubsequence(substring, string) {
    let a = 0;
    let b = 0;
    while (b <= string.length) {
        if (a >= substring.length) {
            return true;
        }
        if (substring[a] === string[b]) {
            a++;
        }
        b++;
    }
    return false;
}
