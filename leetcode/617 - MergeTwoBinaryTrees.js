/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
**/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// set up 'a' list (root1) 
let an1 = new TreeNode(1)
let an2 = new TreeNode(3)
let an3 = new TreeNode(2)
let an4 = new TreeNode(5)

an1.left = an2
an2.left = an4
an1.right = an3

// set up 'b' list (root2)
let bn1 = new TreeNode(2)
let bn2 = new TreeNode(1)
let bn3 = new TreeNode(3)
let bn4 = new TreeNode(4)
let bn5 = new TreeNode(7)

bn1.left = bn2
bn2.right = bn4
bn1.right = bn3
bn3.right = bn5

var mergeTrees = function (t1, t2) {
    if (t1 && t2) {
        const newNode = new TreeNode(t1.val + t2.val)
        newNode.left = mergeTrees(t1.left, t2.left)
        newNode.right = mergeTrees(t1.right, t2.right)
        return newNode
    } else {
        return t1 || t2
    }
};

console.log(mergeTrees(an1, bn1));