// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/424838#overview
function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}
function pivot(arr, comparator, pivotIndex = 0, endIndex = arr.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (comparator(arr[i], arr[pivotIndex]) < 0) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, pivotIndex, swapIndex);
    return swapIndex;
}
function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(arr, comparator, left, right);
        quickSort(arr, comparator, left, pivotIndex - 1);
        quickSort(arr, comparator, pivotIndex + 1, right);
    }
    return arr;
}
// console.log(quickSort([3, 5, 1, 2, 4], (a, b) => a - b));
console.log(quickSort([4, 20, 12, 10, 7, 9], (a, b) => a - b)); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4], (a, b) => a - b)); // [-10, 0, 4, 7]
console.log(quickSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], (a, b) => a.localeCompare(b))); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
const moarKittyData = [
    {
        name: "LilBub",
        age: 7,
    },
    {
        name: "Garfield",
        age: 40,
    },
    {
        name: "Heathcliff",
        age: 45,
    },
    {
        name: "Blue",
        age: 1,
    },
    {
        name: "Grumpy",
        age: 6,
    },
];
console.log(quickSort(moarKittyData, (a, b) => a.age - b.age)); // sorted by age in descending order
export {};
