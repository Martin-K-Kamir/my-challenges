function countUniqueValues(array) {
    let prevousIndex = null;
    let currentIndex = 0;
    let counter = 0;

    while (currentIndex < array.length) {
        if (
            prevousIndex == null ||
            array[prevousIndex] !== array[currentIndex]
        ) {
            counter++;
            prevousIndex = currentIndex;
        }
        currentIndex++;
    }
    return counter;
}
