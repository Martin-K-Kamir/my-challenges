async function cacheGetResult(promise) {
    const x = await promise;
    return () => Promise.resolve(x);
}

const getResult = cacheGetResult(getPromise);

console.log({ getResult });

getResult()
    .then(result => {
        console.log(result); // Prints "Hello, world!" after 1 second"

        return getResult();
    })
    .then(result2 => {
        console.log(result2); // Prints "Hello, world!" immediately, because the result was cached
    });

function getPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}
