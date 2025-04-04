type As<A, B> = A extends B ? A : never;

type Join<List, Separator extends string> = List extends [string]
    ? List[0]
    : List extends [infer First, ...infer Rest]
    ? `${As<First, string>}${Separator}${Join<Rest, Separator>}`
    : "";

type TupleToKey<Tuple> = Tuple extends [infer First, ...infer Rest]
    ? Join<[First, ...Rest], ".">
    : "";

type SquashKeys<Obj, Keys extends PropertyKey[] = []> = Obj extends object
    ? {
          [Key in keyof Obj]: Obj[Key] extends object
              ? SquashKeys<Obj[Key], [...Keys, Key]>
              : TupleToKey<[...Keys, Key]>;
      }[keyof Obj]
    : never;

type ValueAtPath<
    Obj,
    Path extends string,
> = Path extends `${infer Key}.${infer Rest}`
    ? Key extends keyof Obj
        ? Rest extends string
            ? ValueAtPath<Obj[Key], Rest>
            : never
        : never
    : Path extends keyof Obj
    ? Obj[Path]
    : never;

type SquashObject<Obj> = {
    [Key in SquashKeys<Obj>]: ValueAtPath<Obj, Key>;
};

export default function squashObject<
    const Obj extends Record<PropertyKey, unknown>,
>(obj: Obj): SquashObject<Obj> {
    const result: Record<PropertyKey, unknown> = {};

    function traverse(obj: object, keys: string[]) {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === "object" && value != null) {
                traverse(value, [...keys, key]);
            } else {
                const newKey = [...keys, key].filter(Boolean).join(".");
                result[newKey] = value;
            }
        });
    }

    traverse(obj, []);

    return result as any;
}

const object = {
    a: { b: null, c: 1 },
    d: { e: true },
};

const x = squashObject(object);
type X = typeof x;
