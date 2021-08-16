import { defaultEqualsFunction, EqualsFunction } from '../../../utils'
import { LinkedListNode } from './LinkedListNode'
import { IList } from './List'

export class LinkedList<T> implements Iterable<T> {
    private list?: IList<T>

    constructor(private equalsFn: EqualsFunction = defaultEqualsFunction) {}

    get size(): number {
        return this.list ? this.list.size : 0
    }

    get head(): LinkedListNode<T> | undefined {
        return this.list?.head
    }

    get tail(): LinkedListNode<T> | undefined {
        return this.list?.tail
    }

    addFront = (item: T): LinkedList<T> => {
        const node = new LinkedListNode(item)
        if (this.list) {
            this.list.head.prev = node
            node.next = this.list.head
            this.list.head = node
            this.list.size += 1
        } else {
            this.list = {
                head: node,
                tail: node,
                size: 1
            }
        }
        return this
    }

    addBack = (item: T): LinkedList<T> => {
        const node = new LinkedListNode(item)
        if (this.list) {
            this.list.tail.next = node
            node.prev = this.list.tail
            this.list.tail = node
            this.list.size += 1
        } else {
            this.list = {
                head: node,
                tail: node,
                size: 1
            }
        }
        return this
    }

    addAt = (index: number, item: T): LinkedList<T> => {
        if (index < 0 || index > this.size || !this.list) throw new Error(`Index out of bounds: ${index}`)
        if (index === 0) return this.addFront(item)
        if (index === this.size) return this.addBack(item)
        const node = new LinkedListNode(item)
        let current: LinkedListNode<T> = this.list.head
        let i = 0
        while (i < index - 1) {
            current = current.next as LinkedListNode<T>
            i += 1
        }
        node.next = current.next
        node.prev = current
        if (current.next) current.next.prev = node
        current.next = node
        this.list.size += 1
        return this
    }

    peakFront = (): T | undefined => {
        return this.list?.head.value
    }

    peakBack = (): T | undefined => {
        return this.list?.tail.value
    }

    get = (index: number): T | undefined => {
        if (index < 0 || index > this.size - 1) throw new Error(`Index out of bounds: ${index}`)
        let current: LinkedListNode<T> = this.list?.head as LinkedListNode<T>
        let i = 0
        while (i < index) {
            current = current.next as LinkedListNode<T>
            i += 1
        }
        return current.value
    }

    indexOf = (item: T): number => {
        let current: LinkedListNode<T> = this.list?.head as LinkedListNode<T>
        let i = 0
        while (current) {
            if (this.equalsFn(current.value, item)) return i
            current = current.next as LinkedListNode<T>
            i += 1
        }
        return -1
    }

    has = (item: T): boolean => this.indexOf(item) !== -1

    removeFront = (): T | undefined => {
        if (this.list) {
            const node = this.list.head
            if (node.next) node.next.prev = null
            this.list.head = node.next as LinkedListNode<T>
            this.list.size -= 1
            return node.value
        }
    }

    removeBack = (): T | undefined => {
        if (this.list) {
            const node = this.list.tail
            if (node.prev) node.prev.next = null
            this.list.tail = node.prev as LinkedListNode<T>
            this.list.size -= 1
            return node.value
        }
    }

    removeAt = (index: number): T | undefined => {
        if (index < 0 || index > this.size - 1) throw new Error(`Index out of bounds: ${index}`)
        if (index === 0) return this.removeFront()
        if (index === this.size - 1) return this.removeBack()
        let current: LinkedListNode<T> = this.list?.head as LinkedListNode<T>
        let i = 0
        while (i < index) {
            current = current.next as LinkedListNode<T>
            i += 1
        }
        if (current.next) current.next.prev = current.prev
        if (current.prev) current.prev.next = current.next
        if (this.list) this.list.size -= 1
    }

    static from = <T>(array: ArrayLike<T>): LinkedList<T> => {
        const list = new LinkedList<T>()
        for (let i = 0; i < array.length; i++) list.addFront(array[i])

        return list
    };

    *[Symbol.iterator](): Iterator<T> {
        let current = this.list?.head
        while (current) {
            yield current.value
            current = current.next as LinkedListNode<T>
        }
    }
}
