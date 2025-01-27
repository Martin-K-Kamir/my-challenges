export type Equal<X, Y> = (<T>() => T extends Compute<X> ? 1 : 2) extends <
    T
>() => T extends Compute<Y> ? 1 : 2
    ? true
    : false;
export type Expect<T extends true> = T;

type Compute<T> = { [K in keyof T]: T[K] };
