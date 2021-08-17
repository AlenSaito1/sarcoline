import { strict as assert } from 'assert'
import { Deque } from '../../src/'

describe(`Deque`, () => {
    describe('Empty Deques', () => {
        it('should be empty', () => {
            const deque = new Deque()
            assert.ok(deque.isEmpty())
        })

        it('should have size 0', () => {
            const deque = new Deque()
            assert.equal(deque.size, 0)
        })
    })

    describe('adding', () => {
        it('should add an element', () => {
            const deque = new Deque<string>()
            deque.pushFront('a')
            assert.equal(deque.size, 1)
        })

        it('should add multiple elements', () => {
            const deque = new Deque()
            deque.pushFront('a')
            deque.pushFront('b')
            deque.pushFront('c')
            assert.equal(deque.size, 3)
        })

        it('should add multiple elements in reverse order', () => {
            const deque = new Deque()
            deque.pushBack('c')
            deque.pushBack('b')
            deque.pushBack('a')
            assert.equal(deque.size, 3)
        })
    })

    describe('accessing', () => {
        it('should return the first element', () => {
            const deque = new Deque<string>()
            deque.pushFront('a')
            assert.equal(deque.peekFront(), 'a')
        })

        it('should return the last element', () => {
            const deque = new Deque<string>()
            deque.pushBack('a')
            assert.equal(deque.peekBack(), 'a')
        })
    })

    describe('removing', () => {
        it('should remove the first element', () => {
            const deque = new Deque<string>()
            deque.pushFront('a')
            deque.popFront()
            assert.equal(deque.size, 0)
        })

        it('should remove the last element', () => {
            const deque = new Deque<string>()
            deque.pushBack('a')
            deque.popBack()
            assert.equal(deque.size, 0)
        })

        it('should remove multiple elements', () => {
            const deque = new Deque<string>()
            deque.pushFront('a')
            deque.pushFront('b')
            deque.pushFront('c')
            deque.popFront()
            assert.equal(deque.size, 2)
        })

        it('should remove multiple elements in reverse order', () => {
            const deque = new Deque<string>()
            deque.pushBack('c')
            deque.pushBack('b')
            deque.pushBack('a')
            deque.popBack()
            assert.equal(deque.size, 2)
        })
    })
})
