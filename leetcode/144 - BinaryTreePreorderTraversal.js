/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)

n1.right = n2
n2.left = n3

const inorderTraversal = (root) => {
    const res = [];
    traverse(root);
    return res;

    function traverse(node) {
        if (!node) return;
        res.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
};

console.log(inorderTraversal(n1))