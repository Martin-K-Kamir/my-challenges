function curry(fn) {
    return function wrapper(...args) {
        console.log(args.length, fn.length);
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return wrapper.bind(this, ...args);
    };
}

function multiply(...numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}
const curriedMultiply = curry(multiply);
// const multiplyByThree = curriedMultiply(3);
// console.log(multiplyByThree); // 3
// console.log(multiplyByThree(4)); // 12

// const multiplyByFifteen = multiplyByThree(5);
// console.log(multiplyByFifteen); // 15
// console.log(multiplyByFifteen(2)); // 30

console.log(curriedMultiply(1)(2)(3)(4)); // 24
console.log(curriedMultiply(1, 2, 3, 4)); // 24
