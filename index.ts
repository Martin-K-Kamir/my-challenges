function curry<TArgs extends any[], TReturn>(fn: (...args: TArgs) => TReturn) {
    type CurriedFunction = (
        ...args: Partial<TArgs>
    ) => TArgs extends [...infer Rest, infer Last]
        ? Rest extends []
            ? TReturn
            : CurriedFunction
        : never;

    return function wrapper(this: any, ...args: any[]): any {
        if (args.length >= fn.length) {
            return fn.apply(this, args as TArgs);
        }

        return wrapper.bind(this, ...args);
    } as CurriedFunction;
}

function addTwo(a: number, b: number) {
    return a + b;
}
const curriedAddTwo = curry(addTwo);
console.log(curriedAddTwo(3)(4)); // 7
console.log(curriedAddTwo(3, 4)); // 7
const alreadyAddedThree = curriedAddTwo(3);
console.log(alreadyAddedThree(4)); // 7
console.log(alreadyAddedThree(4)); // 7
