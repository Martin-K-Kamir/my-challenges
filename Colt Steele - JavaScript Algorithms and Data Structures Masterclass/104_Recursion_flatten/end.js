function flatten(array) {
    return array.reduce((acc, cur) => {
        return Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur];
    }, []);
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
