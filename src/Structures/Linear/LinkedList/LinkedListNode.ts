export class LinkedListNode<T> {
    constructor(
        public value: T,
        public next: LinkedListNode<T> | null = null,
        public prev: LinkedListNode<T> | null = null
    ) {}
}
