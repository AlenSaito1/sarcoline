import { LinkedListNode } from './LinkedListNode'

export interface IList<T> {
    head: LinkedListNode<T>
    tail: LinkedListNode<T>
    size: number
}
