function averagePair(array, averageTarget) {
    if (array.length === 0) {
        return false;
    }

    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const average = (array[start] + array[end]) / 2;
        if (average === averageTarget) {
            return true;
        } else if (average > averageTarget) {
            end--;
        } else {
            start++;
        }
    }

    return false;
}
