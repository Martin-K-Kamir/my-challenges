"use strict";
function promiseAllSettled(iterable) {
    return new Promise((resolve, reject) => {
        const results = new Array(iterable.length);
        let unresolved = iterable.length;
        if (unresolved === 0) {
            return resolve(results);
        }
        iterable.forEach(async (value, index) => {
            let result;
            try {
                result = {
                    status: "fulfilled",
                    value: await value,
                };
            } catch (err) {
                result = {
                    status: "rejected",
                    reason: err,
                };
            } finally {
                results[index] = result;
                unresolved--;
                if (unresolved === 0) {
                    resolve(results);
                }
            }
        });
    });
}
//   export default  promiseAllSettled
(async () => {
    const p0 = Promise.resolve(3);
    const p1 = 42;
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("foo");
        }, 100);
    });
    console.log(await promiseAllSettled([p0, p1, p2]));
})();
