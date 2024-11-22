function flatten(array) {
    return array.reduce((acc, cur) => {
        return Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur];
    }, []);
}

function flatten2(array) {
    for (let i = 0; i < array.length; ) {
        if (Array.isArray(array[i])) {
            array.splice(i, 1, ...array[i]);
        } else {
            i++;
        }
    }

    return array;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
