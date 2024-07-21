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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const pathSum = (root, current) => {
        if (!root) return false;
        const newVal = current + root.val;
        if (!root?.left && !root?.right) {
            return newVal === targetSum;
        }
        return pathSum(root.left, newVal) || pathSum(root.right, newVal);
    }
    return pathSum(root, 0);
};