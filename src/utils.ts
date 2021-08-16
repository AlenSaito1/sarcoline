export type CompareFunction<T> = (a: T, b: T) => number

export const defaultCompareFunction = <T>(a: T, b: T): number => {
    if (a < b) return -1
    if (a === b) return 0
    return 1
}

export type EqualsFunction = <T>(a: T, b: T) => boolean

export const defaultEqualsFunction = <T>(a: T, b: T): boolean => a === b
