if (!Object.fromEntries) {
    Object.fromEntries = function (entries) {
        const obj = {};
        for (let [key, value] of entries) {
            obj[key] = value;
        }
        return obj;
    };
}

if (!Object.entries) {
    Object.entries = function (obj) {
        const entries = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                entries.push([key, obj[key]]);
            }
        }
        return entries;
    };
}

function isPlainObject(value) {
    if (typeof value !== "object" || value == null) {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

function stringifyNumbers(value) {
    console.log(value);
    if (typeof value === "number") {
        return String(value);
    }

    if (isPlainObject(value)) {
        return Object.fromEntries(
            Object.entries(value).map(([key, value]) => [
                key,
                stringifyNumbers(value),
            ])
        );
    }

    return value;
}
