const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
    test('adds element to beginning of list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('index less than zero', () => {
        test('returns null', () => {
            const ll = new LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    describe('index greater than length', () => {
        test('returns null', () => {
            const ll = new LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(5)).toBeNull()
        })
    })

    describe('index is zero', () => {
        test('returns head', () => {
            const ll = new LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(0).value).toBe(10)
        })
    })

    describe('index is in the middle', () => {
        test('returns element at that index', () => {
            const ll = new LinkedList.fromValues(10, 20, 30, 40)
            expect(ll.getByIndex(2).value).toBe(30)
        })
    })
})

describe('#insertAtIndex', () => {
    describe('index less than zero', () => {
        test('does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(-1, 30)
            expect(ll.length).toBe(2)
        })
    })
    describe('index greater than list length', () => {
        test('does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20) 
            ll.insertAtIndex(5, 20)
            expect(ll.length).toBe(2)
        })
    })
    describe('with index zero', () => {
        test('insert new head that points to the old head', () => {
            const ll = LinkedList.fromValues(10, 20) 
            ll.insertAtIndex(0, 30)
            expect(ll.head.value).toBe(30)
            expect(ll.length).toBe(3)
            expect(ll.head.next.value).toBe(10)
        })
    })
    describe('with index in middle', () => {
        test('insert at a given index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.insertAtIndex(2, 25)
            const node = ll.getByIndex(2)
            expect(node.value).toBe(25)
            expect(node.next.value).toBe(30)
            expect(ll.length).toBe(5)
        })
    })
})

describe('#removeHead', () => { 
    test('removes the head', () => {
        const ll = LinkedList.fromValues(10, 20, 30, 40)
        ll.removeHead()
        expect(ll.head.value).toBe(20)
        expect(ll.length).toBe(3)
    })
})

describe('#removeAtIndex', () => {
    describe('index less than zero', () => {
        test('nothing gets removed', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.removeAtIndex(-1)
            expect(ll.head.value).toBe(10)
            expect(ll.length).toBe(4)
        })
    })
    describe('index greater than list length', () => {
        test('nothing gets removed', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.removeAtIndex(5)
            expect(ll.head.value).toBe(10)
            expect(ll.head.next.value).toBe(20)
            expect(ll.length).toBe(4)
        })
    })
    describe('index is zero', () => {
        test('head is removed', () => {
            const ll = LinkedList.fromValues(10, 20, 30)
            ll.removeAtIndex(0)
            expect(ll.head.value).toBe(20)
            expect(ll.head.next.value).toBe(30)
            expect(ll.length).toBe(2)
        })
    })
})