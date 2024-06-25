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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let stack = [];
    let u = root;
    while (u !== null) {
        stack.push(u);
        u = u.right;
    }
    let greater = 0;
    while (stack.length > 0) {
        let node = stack.pop();
        greater += node.val;
        node.val = greater;
        node = node.left;
        while (node !== null) {
            stack.push(node);
            node = node.right;
        }
    }
    return root;
};