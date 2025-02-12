export default function debounce<TArgs extends any[]>(
    fn: (...args: TArgs) => void,
    wait: number
) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let savedThis: unknown | null = null;
    let savedArgs: TArgs | null = null;

    function invokeFn() {
        if (timeoutId === null) {
            return;
        }

        fn.apply(savedThis, savedArgs as TArgs);
        clearDebounce();
    }

    function wrapDebounce(this: unknown, ...args: TArgs) {
        savedArgs = args;
        savedThis = this;

        if (timeoutId !== null) {
            clearDebounce();
        }

        timeoutId = setTimeout(() => {
            invokeFn();
        }, wait);
    }

    function clearDebounce() {
        clearTimeout(timeoutId!);
        timeoutId = null;
    }

    wrapDebounce.cancel = clearDebounce;
    wrapDebounce.flush = invokeFn;
    return wrapDebounce;
}
