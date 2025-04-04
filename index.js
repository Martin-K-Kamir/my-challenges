function expensiveMul(a, b) {
    console.log("Computing...");
    return a * b;
}

export default function memoize(func) {
    const cache = new Map();

    return function (...args) {
        let currentCache = cache;

        args.forEach(arg => {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }

            currentCache = currentCache.get(arg);
        });

        if (currentCache.has("result")) {
            return currentCache.get("result");
        }

        const result = func.apply(this, args);
        currentCache.set("result", result);
        return result;
    };
}

// Create a memoized version of the function.
const memoizedExpensiveMul = memoize(expensiveMul);

// First call (computes and caches the result).
console.log(memoizedExpensiveMul(3, 7)); // Output: Computing... 21

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveMul(3, 7)); // Output: 21

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveMul(5, 8)); // Output: Computing... 40

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveMul(5, 8)); // Output: 40
