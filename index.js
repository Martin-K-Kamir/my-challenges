function promisify(func) {
    const sym = Symbol.for("util.promisify.custom");

    if (typeof func[sym] === "function") {
        return func.call(this, ...args);
    }

    return function (...args) {
        return new Promise((resolve, reject) => {
            func.call(this, ...args, (err, data) => {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });
    };
}

// Example function with callback as the first argument.
// The callback has the signature `(err, value) => any`.
function foo(callback, url, options) {
    apiCall(url, options)
        .then(data => callback(null, data))
        .catch(err => callback(err));
}

foo[Symbol.for("util.promisify.custom")] = (url, options) => {
    return new Promise((resolve, reject) => {
        foo(
            (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            },
            url,
            options
        );
    });
};

const promisifiedFoo = foo[Symbol.for("util.promisify.custom")]; // true
const data = await promisifiedFoo("example.com", { foo: 1 });
