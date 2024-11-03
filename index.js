"use strict";
function promiseAny(iterable) {
    return new Promise((resolve, reject) => {
        const errors = [];
        let pending = iterable.length;
        if (pending === 0) {
            reject(new AggregateError(errors));
        }
        iterable.forEach(async (value, index) => {
            try {
                const x = await value;
                resolve(x);
            } catch (err) {
                errors[index] = err;
                pending--;
                if (pending === 0) {
                    reject(new AggregateError(errors));
                }
            }
        });
    });
}
(async () => {
    const p0 = Promise.reject(2);

    try {
        await promiseAny([p0]);
    } catch (err) {
        console.log(err instanceof AggregateError);
        console.log(err.errors);
    }
})();
