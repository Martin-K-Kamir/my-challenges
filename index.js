function compact(value) {
    if (Array.isArray(value)) {
        return value.filter(Boolean).map(compact);
    }
    if (typeof value === "object" && value != null) {
        return Object.fromEntries(Object.entries(value)
            .filter(([_, value]) => Boolean(value))
            .map(([key, value]) => [key, compact(value)]));
    }
    return value;
}
console.log(compact([0, 1, false, 2, "", 3, null])); // => [1, 2, 3]
const x = compact({ foo: true, bar: null });
export {};
