const LinkedList = require('./linkedlist/LinkedList')

const ll1 = LinkedList.fromValues(1, 1, 5);
const ll2 = LinkedList.fromValues(2, 3, 7);

var mergeTwoLists = function (list1, list2) {
    var merged = { val: -1, next: null },
        curr = merged;
    // while there is data in both lists, compare values to decide which comes next
    // and append it to curr by setting its pointer to the smaller value
    while (list1 && list2) {
        if (list1.val > list2.val) {
            curr.next = list2;
            list2 = list2.next; // skip forward in list2
        } else {
            curr.next = list1;
            list1 = list1.next; // skip forward in list1
        }
        curr = curr.next;
    }
    curr.next = list1 || list2; // grab anything that's left
    
    let output = ''
    let current = merged
    while (current) {
        output = `${output}${current.value} -> `
        current = current.next
    }
    console.log(`${output}null`)
    
    return merged.next;
};

console.log(mergeTwoLists(ll1, ll2));