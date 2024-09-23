function areThereDuplicates(...args) {
    const count = {};

    for (const value of args) {
        if (count[value]) {
            return true;
        }

        count[value] = 1;
    }

    return false;
}
