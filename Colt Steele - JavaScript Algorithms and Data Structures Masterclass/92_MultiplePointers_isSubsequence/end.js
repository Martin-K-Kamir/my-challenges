function isSubsequence(substring, string) {
    let i = 0,
        j = 0;

    while (j <= string.length) {
        if (i === substring.length) {
            return true;
        }

        if (substring[i] === string[j]) {
            i++;
        }

        j++;
    }

    return false;
}
