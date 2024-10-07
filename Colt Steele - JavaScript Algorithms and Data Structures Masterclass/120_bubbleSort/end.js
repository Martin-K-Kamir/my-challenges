function bubbleSort(arr, comparator = (a, b) => a - b) {
    if (arr.length < 2) {
        return arr;
    }

    let swapped;
    for (let i = arr.length - 1; i > 0; i--) {
        swapped = false;
        for (let j = 0; j < i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }

    return arr;
}
