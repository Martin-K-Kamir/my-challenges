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

function mergeSort(arr, comparator) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), comparator);
    const right = mergeSort(arr.slice(mid), comparator);

    return merge(left, right, comparator);
}
