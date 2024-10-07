function swap(arr, a, b) {
    return ([arr[a], arr[b]] = [arr[b], arr[a]]);
}

function pivot(
    arr,
    comparator = (a, b) => a - b,
    pivotIndex = 0,
    endIndex = arr.length - 1
) {
    let swapIndex = pivotIndex;

    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        // if (arr[i] < arr[pivotIndex]) {
        if (comparator(arr[i], arr[pivotIndex]) < 0) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, pivotIndex, swapIndex);
    return swapIndex;
}
