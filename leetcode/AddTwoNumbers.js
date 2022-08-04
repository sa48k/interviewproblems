// https://leetcode.com/problems/add-two-numbers/
// naive solution: convert linked lists to numbers, add, return as a LL
// better solution: add in-place using a carry bit

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// set up 'a' list and 'b' list
let an1 = new ListNode(2)
let an2 = new ListNode(4)
let an3 = new ListNode(3)

let bn1 = new ListNode(5)
let bn2 = new ListNode(6)
let bn3 = new ListNode(4)

an1.next = an2
an2.next = an3
bn1.next = bn2
bn2.next = bn3

/**
 * @param {ListNode} an1
 * @param {ListNode} bn1
 * @return {ListNode}
 */
var addTwoNumbers = function (an1, bn1) {
    // helper functions
    const reverseString = (s) => s.split('').reverse().join('')
    const insertAtHead = (data) => {
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }

    // retrieve the numbers from the two linked lists
    // place them in strings
    let curr1 = an1
    let string1 = curr1.val.toString()
    while (curr1.next) {
        curr1 = curr1.next
        string1 += curr1.val  
    }
    let curr2 = bn1
    let string2 = curr2.val.toString()
    while (curr2.next) {
        curr2 = curr2.next
        string2 += curr2.val
    }
    // reverse them both, then add them together
    num1 = parseInt(reverseString(string1))
    num2 = parseInt(reverseString(string2))
    let answer = (num1 + num2).toString()
    head = new ListNode(answer[0])
    if (answer.length === 1) return head
    for (let i = 1; i < answer.length; i++) {
        currhead = head
        let node = new ListNode(answer[i])
        node.next = currhead
        head = node
    }
    
    return head
};

console.log(addTwoNumbers(an1, bn1))