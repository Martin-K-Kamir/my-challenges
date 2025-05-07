export default function findMissingNumberInSequence(numbers) {
    const sequence = Array.from({ length: numbers.length + 1 }, (_, i) => i);

    return sequence.filter(n => !numbers.includes(n))[0];
}

console.log(findMissingNumberInSequence([1, 3, 0]));
