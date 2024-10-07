function merge(left, right, comparator = (a, b) => a - b) {
    const mergedArr = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (comparator(left[i], right[j]) < 0) {
            mergedArr.push(left[i]);
            i++;
        } else {
            mergedArr.push(right[j]);
            j++;
        }
    }

    return [...mergedArr, ...left.slice(i), ...right.slice(j)];
}
