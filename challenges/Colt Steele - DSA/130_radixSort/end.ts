(() => {
    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4445156#overview

    function getDigit(num: number, place: number) {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }

    function digitCount(num: number) {
        return String(num).length;
    }

    function mostDigits(nums: number[]) {
        return nums.reduce((acc, cur) => {
            return Math.max(acc, digitCount(cur));
        }, 0);
    }

    function radixSort(nums: number[]) {
        const maxDigitCount = mostDigits(nums);

        for (let k = 0; k < maxDigitCount; k++) {
            let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

            for (let i = 0; i < nums.length; i++) {
                const digit = getDigit(nums[i], k);
                digitBuckets[digit].push(nums[i]);
            }

            nums = digitBuckets.flat();
        }

        return nums;
    }

    console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
    console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
    console.log(
        radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])
    ); // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
})();
