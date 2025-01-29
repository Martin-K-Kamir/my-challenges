function promiseAny<T>(iterable: Array<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        const errors: any[] = [];
        let counter = iterable.length;

        if (counter === 0) {
            reject(new AggregateError(errors));
        }

        iterable.forEach(async (item, index) => {
            try {
                resolve(await item);
            } catch (error) {
                errors[index] = error;

                counter--;
                if (counter === 0) {
                    reject(new AggregateError(errors));
                }
            }
        });
    });
}

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
