function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
} 

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

function reverseList(curr) {
    var prev = null;
    while (curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

console.log(reverseList(n1));