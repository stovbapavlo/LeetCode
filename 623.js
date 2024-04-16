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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    function dfs(node, currentDepth) {
        if (!node) return;

        if (currentDepth === depth - 1) {
            node.left = new TreeNode(val, node.left)
            node.right = new TreeNode(val, null, node.right)
        }

        dfs(node.left, currentDepth + 1)
        dfs(node.right, currentDepth + 1)
    }

    if (depth === 1) {
        const newNode = new TreeNode(val, root)
        return newNode;
    }


    dfs(root, 1);
    return root;
};