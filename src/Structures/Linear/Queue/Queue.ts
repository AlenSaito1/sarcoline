import { LinkedList } from '../LinkedList'
import { defaultEqualsFunction, EqualsFunction } from '../../../utils'

export class Queue<T> implements Iterable<T> {
    list: LinkedList<T>

    constructor(equalsFn: EqualsFunction = defaultEqualsFunction) {
        this.list = new LinkedList<T>(equalsFn)
    }

    get size(): number {
        return this.list.size
    }

    isEmpty = (): boolean => this.list.size === 0

    enqueue = (item: T): void => void this.list.addFront(item)

    dequeue = (): T | undefined => this.list.removeBack()

    peekFront = (): T | undefined => this.list.peakFront()

    peekBack = (): T | undefined => this.list.peakBack()

    has = (item: T): boolean => this.list.has(item);

    [Symbol.iterator] = (): Iterator<T> => this.list[Symbol.iterator]()
}
