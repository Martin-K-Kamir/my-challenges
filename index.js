export default function debounce(fn, wait) {
    let timeoutId = null;
    let savedThis = null;
    let savedArgs = null;

    function invokeFn() {
        if (timeoutId === null) {
            return;
        }
        fn.apply(savedThis, savedArgs);
        clearDebounce();
    }

    function wrapDebounce(...args) {
        savedArgs = args;
        savedThis = this;

        if (timeoutId !== null) {
            clearDebounce();
        }

        timeoutId = setTimeout(() => {
            invokeFn();
        }, wait);
    }

    function clearDebounce() {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    wrapDebounce.cancel = clearDebounce;
    wrapDebounce.flush = invokeFn;
    return wrapDebounce;
}

// let i = 0;
// function increment() {
//     i++;
// }
// const debouncedIncrement = debounce(increment, 100);

// // t = 0: Call debouncedIncrement().
// debouncedIncrement(); // i = 0
// console.log({ i });

// // t = 50: Cancel the delayed increment.
// debouncedIncrement.cancel();
// setTimeout(() => {
//     console.log({ i });
// }, 55);

// // t = 100: increment() was not invoked and i is still 0.
// setTimeout(() => {
//     console.log({ i });
// }, 105);

// let i = 0;
// function increment() {
//     i++;
// }
// const debouncedIncrement = debounce(increment, 100);

// // t = 0: Call debouncedIncrement().
// debouncedIncrement(); // i = 0
// console.log({ i });
// // t = 50: i is still 0 because 100ms have not passed.
// // t = 51:
// debouncedIncrement.flush(); // i is now 1 because flush causes() the callback to be immediately invoked.
// console.log({ i });
// // t = 100: i is already 1. The callback has been called before
// // and won't be called again.
// setTimeout(() => {
//     console.log({ i });
// }, 105);

let i = 0;
const increment = debounce(() => {
    i++;
}, 10);

console.log({ i });
increment.flush();
console.log({ i });

setTimeout(() => {
    increment.flush();
    console.log({ i });
    // Add a longer delay because the browser timer is unreliable.
}, 500);
