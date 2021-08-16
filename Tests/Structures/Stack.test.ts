import { strict as assert } from 'assert'
import { Stack } from '../../src/Structures'

describe('Stack', () => {

    describe('Empty Stacks', () => {
    
        it('should be empty', () => {
            const stack = new Stack()
            assert.equal(stack.isEmpty(), true)
        })

        it('should have size 0', () => {
            const stack = new Stack()
            assert.equal(stack.size, 0)
        })

        it('should be iterable', () => {
            const stack = new Stack()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const item of stack) {
                assert.fail()
            }
        })

    })

    describe('adding', () => {

        it('should add items', () => {
            const stack = new Stack<number>()
            stack.push(1)
            stack.push(2)
            stack.push(3)
            assert.equal(stack.size, 3)
        })

        it('should add items in the right order', () => {
            const stack = new Stack<number>()
            stack.push(1)
            assert.equal(stack.peek(), 1)
            stack.push(2)
            assert.equal(stack.peek(), 2)
            stack.push(3)
            assert.equal(stack.peek(), 3)
        })

    })

    describe('removing', () => {

        it('should remove items', () => {
            const stack = new Stack<number>()
            stack.push(1)
            stack.push(2)
            stack.push(3)
            assert.equal(stack.size, 3)
            assert.equal(stack.pop(), 3)
            assert.equal(stack.size, 2)
            assert.equal(stack.pop(), 2)
            assert.equal(stack.size, 1)
            assert.equal(stack.pop(), 1)
            assert.equal(stack.size, 0)
            assert.equal(stack.pop(), undefined)
            assert.equal(stack.size, 0)
        })

    })

    describe('peeking', () => {

        it('should peek at the top item', () => {
            const stack = new Stack<number>()
            stack.push(1)
            stack.push(2)
            stack.push(3)
            assert.equal(stack.peek(), 3)
        })

        it('should peek at the top item in the right order', () => {
            const stack = new Stack<number>()
            stack.push(1)
            assert.equal(stack.peek(), 1)
            stack.push(2)
            assert.equal(stack.peek(), 2)
            stack.push(3)
            assert.equal(stack.peek(), 3)
        })

    })

    describe('iterating', () => {
        it('should iterate', () => {
            const stack = new Stack<number>()
            stack.push(1)
            stack.push(2)
            stack.push(3)
            let count = 0
            for (const item of stack) {
                assert.strictEqual(item, count + 1)
                count++
            }
            assert.strictEqual(count, 3)
        })
    })

})
