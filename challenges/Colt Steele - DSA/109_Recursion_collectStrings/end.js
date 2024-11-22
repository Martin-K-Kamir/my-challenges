function collectStrings(obj) {
    const result = [];

    function traverse(value) {
        if (typeof value === "string") {
            result.push(value);
        }

        if (typeof value === "object" && value != null) {
            Object.values(value).forEach(traverse);
        }
    }

    Object.values(obj).forEach(traverse);
    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

collectStrings(obj); // ["foo", "bar", "baz"])
