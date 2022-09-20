/**
 * @param {Node} root
 * @return {Node}
 */

function TreeNode(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

// set up 'a' list (root1) 
let t1 = new TreeNode(1)
let t2 = new TreeNode(2)
let t3 = new TreeNode(3)
let t4 = new TreeNode(4)
let t5 = new TreeNode(5)
let t6 = new TreeNode(6)
let t7 = new TreeNode(7)

t1.left = t2
t1.right = t3
t2.left = t4
t2.right = t5
t3.left = t6
t3.right = t7

var connect = function (root) {
    // bfs
    let queue = [root]
    while (queue[0].left) {
        let nextlevel = []
        queue.forEach(node => {
            nextlevel.push(node.left)
            nextlevel.push(node.right)
        });
        for (let i = 0; i < nextlevel.length - 1; i++) {
            nextlevel[i].next = nextlevel[i+1]
        }
        console.log(nextlevel)
        queue = nextlevel
    }
    return root
};

console.log(connect(t1));