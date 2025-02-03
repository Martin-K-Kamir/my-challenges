function fill<T>(
    array: Array<T>,
    value: any,
    start: number = 0,
    end: number = array.length
): Array<T> {
    if (start < 0) {
        start = array.length - Math.abs(start);
    }
    if (end < 0) {
        end = array.length - Math.abs(end);
    }

    console.log({ start, end });

    if (start > array.length) {
        return array;
    }

    for (let i = start; i < end; i++) {
        array[i] = value;
    }
    return array;
}

// console.log(fill([1, 2, 3], "a")); // ['a', 'a', 'a']
// console.log(fill([4, 6, 8, 10], "*", 1, 3)); // [4, '*', '*', 10]
// console.log(fill([4, 6, 8, 10, 12], "*", -3, -1)); // [4, 6, '*', '*', 12]
console.log(fill([1], "*", 2, 3)); // [1]
console.log(fill([1, 2], "*", 2, 3)); // [1, 2]
