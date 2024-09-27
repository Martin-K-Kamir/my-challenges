function areThereDuplicates2(...args) {
    const map = new Map();

    for (const value of args) {
        if (map.has(value)) {
            return true;
        }

        map.set(value, true);
    }

    return false;
}

function areThereDuplicates(...args) {
    args.sort();

    for (let i = 1; i < args.length; i++) {
        if (args[i] === args[i - 1]) {
            return true;
        }
    }

    return false;
}
