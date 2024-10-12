// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalindrome(str.slice(1, -1));
}

function isPalindrome2(str, start = 0, end = str.length - 1) {
    if (start > end) {
        return true;
    }

    if (str[start] !== str[end]) {
        return false;
    }

    return isPalindrome(str, start + 1, end - 1);
}
