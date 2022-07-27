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
n5.next = n1

var hasCycle = function (head) {
    let fast = head
    while (fast && fast.next) {
        head = head.next
        fast = fast.next.next
        // console.log(head, fast)
        if (head === fast) { return true }
    }
    return false
};

console.log(hasCycle(n1))