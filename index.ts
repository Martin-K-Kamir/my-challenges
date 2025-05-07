export default function findMissingNumberInSequence(numbers: number[]): number {
    let expectedSum = 0;
    const n = numbers.length;

    for (let i = 0; i <= n; i++) {
        expectedSum += i;
    }

    let actualSum = 0;
    for (const num of numbers) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}
