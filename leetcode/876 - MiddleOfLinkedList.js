function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
} 

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)
// let n6 = new ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
// n5.next = n6

// var middleNode = function (head) {
//     // find the length of the list
//     let count = 1
//     curr = head
//     while (curr.next) {
//         count++
//         curr = curr.next
//     }
//     curr = head // reset current node to beginning of list

//     // return the node at index [length/2, rounded up, minus 1]
//     for (let i = 0; i < Math.floor(count - 1) / 2 ; i++) {
//         curr = curr.next
//     }
//     return curr
// };

const middleNode = (head) => {
    curr = head
    fast = head
    while (fast && fast.next) {
        curr = curr.next
        fast = fast.next.next
    }
    return curr
}
console.log(middleNode(n1))

// better solution: use a fast pointer (jumps 2 nodes)
// and a slow pointer (1 node at a time)
// when the fast pointer gets to the end,
// the slow pointer will be at the midpoint