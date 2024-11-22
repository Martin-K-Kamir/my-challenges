// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424830#overview

function selectionSort(arr, comparator = (a, b) => a - b) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }

    return arr;
}
