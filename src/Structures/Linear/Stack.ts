import { defaultEqualsFunction, EqualsFunction } from './../../utils'
import { LinkedList } from './LinkedList'

export class Stack<T> implements Iterable<T> {
    list: LinkedList<T>

    constructor(equalsFn: EqualsFunction = defaultEqualsFunction) {
        this.list = new LinkedList(equalsFn)
    }

    get size(): number {
        return this.list.size
    }

    push = (value: T): Stack<T> => {
        this.list.addBack(value)
        return this
    }

    pop = (): T | undefined => this.list.removeBack()

    peek = (): T | undefined => this.list.peekBack()

    isEmpty = (): boolean => this.list.size === 0;

    [Symbol.iterator](): Iterator<T> {
        return this.list[Symbol.iterator]()
    }
}
