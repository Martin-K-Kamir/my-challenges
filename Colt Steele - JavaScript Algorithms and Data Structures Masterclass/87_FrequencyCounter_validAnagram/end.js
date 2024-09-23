function validAnagram(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    const map = new Map();

    for (const char of a) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    for (const char of b) {
        if (map.get(char) > 0) {
            map.set(char, map.get(char) - 1);
        } else {
            return false;
        }
    }

    return true;
}
