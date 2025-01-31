function minBy(array, iteratee) {
    if (array.length === 0) {
        return undefined;
    }
    let result;
    let computed;
    array.forEach(value => {
        const current = iteratee(value);
        if ((current && computed == undefined) || current < computed) {
            result = value;
            computed = current;
        }
    });
    return result;
}
console.log(minBy([2, 3, 1, 4], num => num)); // => 1
console.log(minBy([{ n: 1 }, { n: 2 }], o => o.n)); // => { n: 1 }
// @ts-expect-error
console.log(minBy([{ n: 1 }, { n: 2 }], o => o.m)); // => undefined
export {};
