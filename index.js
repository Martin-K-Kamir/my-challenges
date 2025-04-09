function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < arr[start]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, swapIndex, start);
    return swapIndex;
}

export default function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end);

        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }

    return arr;
}

console.log(quickSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
console.log(quickSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]
