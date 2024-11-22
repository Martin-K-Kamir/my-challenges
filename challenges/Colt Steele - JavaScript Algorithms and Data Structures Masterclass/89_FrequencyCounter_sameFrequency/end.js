function sameFrequency(a, b) {
    const strA = String(a);
    const strB = String(b);

    if (strA.length !== strB.length) return false;

    const count = {};

    for (let digit of strA) {
        count[digit] = (count[digit] || 0) + 1;
    }

    for (let digit of strB) {
        if (!count[digit]) return false;
        count[digit] -= 1;
    }

    return true;
}
