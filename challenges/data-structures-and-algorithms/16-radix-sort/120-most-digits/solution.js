(() => {
    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4445136#overview
    function digitCount(num) {
        return String(num).length;
    }
    function mostDigits(nums) {
        return nums.reduce((acc, cur) => {
            return Math.max(acc, digitCount(cur));
        }, 0);
    }
    console.log(mostDigits([1, 9, 10, 100, 99])); // 3
    console.log(mostDigits([100, 1010, 1, 500])); // 4
    console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
    console.log(mostDigits([])); // 0
})();
export {};
