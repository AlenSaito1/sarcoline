import { LinkedList } from '..'
import { defaultEqualsFunction, EqualsFunction } from '../../../utils'

export class Deque<T> implements Iterable<T> {
    list: LinkedList<T>

    constructor(equalsFn: EqualsFunction = defaultEqualsFunction) {
        this.list = new LinkedList(equalsFn)
    }

    get size(): number {
        return this.list.size
    }

    pushFront = (value: T): void => void this.list.addFront(value)

    pushBack = (value: T): void => void this.list.addBack(value)

    popFront = (): T | undefined => this.list.removeFront()

    popBack = (): T | undefined => this.list.removeBack()

    peekFront = (): T | undefined => this.list.peekFront()

    peekBack = (): T | undefined => this.list.peekBack()

    isEmpty = (): boolean => this.list.size === 0

    has = (value: T): boolean => this.list.has(value);

    [Symbol.iterator] = (): Iterator<T> => this.list[Symbol.iterator]()
}
