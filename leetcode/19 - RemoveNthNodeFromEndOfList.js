function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)
let n6 = new ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head
    let fast = head
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    if (!fast) return head.next // n is same as length of list
    while (fast.next !== null) {
        fast = fast.next        // when fast reaches the end, 
        slow = slow.next        // slow is n from the end
    }
    slow.next = slow.next.next  // 'skip over' the old next to remove it 
    return head
};

console.log(removeNthFromEnd(n1, 2))