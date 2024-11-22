function isEven(num) {
    return num % 2 === 0;
}

function isPlainObject(value) {
    if (typeof value !== "object" || value == null) {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

function nestedEvenSum(obj) {
    let result = 0;

    function traverse(value) {
        if (typeof value === "number" && isEven(value)) {
            result += value;
        }

        if (isPlainObject(value)) {
            Object.values(value).forEach(traverse);
        }
    }

    Object.values(obj).forEach(traverse);
    return result;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
        },
    },
};

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
