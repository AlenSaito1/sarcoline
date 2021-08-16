import { strict as assert } from 'assert'
import { describe } from 'mocha'

import { LinkedList } from '../../src'

describe(LinkedList.name, () => {

    describe('Empty Lists', () => {
        
        it('should be empty', () => {
            const list = new LinkedList()
            assert.strictEqual(list.size, 0)
        })
        
        it('should have no head', () => {
            const list = new LinkedList()
            assert.strictEqual(list?.head, undefined)
        })

        it('should have no tail', () => { 
            const list = new LinkedList()
            assert.strictEqual(list?.tail, undefined)
        })

    })

    describe('adding', () => {

        it('should add a node to the head', () => {
            const list = new LinkedList<number>()
            list.addFront(1)
            assert.strictEqual(list.head?.value, 1)
        })

        it('should add a node to the tail', () => {
            const list = new LinkedList<number>()
            list.addBack(1)
            assert.strictEqual(list.tail?.value, 1)
        })

    })

    describe('removing', () => {
        
        it('should remove a node from the head', () => {
            const list = new LinkedList<number>()
            list.addFront(1)
            list.removeFront()
            assert.strictEqual(list?.head, null)
        })

        it('should remove a node from the tail', () => {
            const list = new LinkedList<number>()
            list.addBack(1)
            list.removeBack()
            assert.strictEqual(list.tail, null)
        })

    })

    describe('iterating', () => {
        
        it('should iterate over the list', () => {
            const list = new LinkedList<number>()
            list.addFront(1)
            list.addBack(2)
            list.addAt(2, 3)
            let count = 0
            for (const node of list) {
                assert.strictEqual(node, count + 1)
                count++
            }
            assert.strictEqual(count, 3)
        })

    })

    describe('accessing', () => {

        it('should get the value of the head', () => {
            const list = new LinkedList<number>()
            list.addFront(1)
            assert.strictEqual(list.head?.value, 1)
        })

        it('should get the value of the tail', () => {
            const list = new LinkedList<number>()
            list.addBack(1)
            assert.strictEqual(list.tail?.value, 1)
        })

    })

    describe('errors', () => {
        

        it('should throw an error when adding a node to an empty list', () => {
            const list = new LinkedList<number>()
            assert.throws(() => list.addAt(1, 2))
        })

        it('should throw an error when removing a node from an empty list', () => {
            const list = new LinkedList<number>()
            assert.throws(() => list.removeAt(1))
        })

        it('should throw an error when getting a value from an empty list', () => {
            const list = new LinkedList<number>()
            assert.throws(() => list.get(1))
        })
    })
})