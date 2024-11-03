function promiseAny<T>(iterable: Array<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        const errors: T[] = [];
        let pending = iterable.length;

        if (pending === 0) {
            reject(new AggregateError(errors));
        }

        iterable.forEach(async (value, index) => {
            try {
                resolve(await value);
            } catch (err) {
                errors[index] = err as T;
                pending--;

                if (pending === 0) {
                    reject(new AggregateError(errors));
                }
            }
        });
    });
}

(async () => {
    const p0 = new Promise(resolve => {
        setTimeout(() => {
            resolve(42);
        }, 100);
    });
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Err!");
        }, 400);
    });

    console.log(await promiseAny([p0, p1])); // 42
})();
