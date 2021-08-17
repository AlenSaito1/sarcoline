import { strict as assert } from 'assert'
import { Queue } from '../../src'

describe('Queue', () => {
    describe('Empty Queue', () => {
        it('should return undefined', () => {
            const queue = new Queue()
            assert.equal(queue.dequeue(), undefined)
        })

        it('sould have size 0', () => {
            const queue = new Queue()
            assert.equal(queue.size, 0)
        })
    })

    describe('adding', () => {
        it('should add items to the queue', () => {
            const queue = new Queue()
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            assert.equal(queue.size, 3)
        })

        it('should add items in order', () => {
            const queue = new Queue()
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            assert.equal(queue.dequeue(), 1)
            assert.equal(queue.dequeue(), 2)
            assert.equal(queue.dequeue(), 3)
        })
    })

    describe('peeking', () => {
        it('should return the item in the front of the queue', () => {
            const queue = new Queue()
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            assert.equal(queue.peekFront(), 3)
        })

        it('it should return the item in the back of the queue', () => {
            const queue = new Queue()
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            assert.equal(queue.peekBack(), 1)
        })
    })

    describe('removing', () => {
        it('should remove the first item in the queue', () => {
            const queue = new Queue()
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
            assert.equal(queue.dequeue(), 1)
        })
    })
})
