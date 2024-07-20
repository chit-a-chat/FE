type AnyFn = (...args: unknown[]) => unknown;

export type ClassProperties<C> = {
    [K in keyof C as C[K] extends AnyFn ? never : K]: C[K];
};
