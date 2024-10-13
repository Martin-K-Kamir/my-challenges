function countZeroes(nums: number[]): number {
    function binarySearchZero(
        nums: number[],
        start = 0,
        end = nums.length
    ): number {
        if (start > end) {
            return -1;
        }

        let mid = Math.floor((start + end) / 2);

        if ((mid === 0 || nums[mid - 1] === 1) && nums[mid] === 0) {
            return mid;
        } else if (nums[mid] > 0) {
            return binarySearchZero(nums, mid + 1, end);
        } else {
            return binarySearchZero(nums, start, mid - 1);
        }
    }

    const zeroIndex = binarySearchZero(nums);

    if (zeroIndex === -1) {
        return 0;
    }

    return nums.length - zeroIndex;
}
