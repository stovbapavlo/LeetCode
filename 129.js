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
 * @return {number}
 */
const sumNumbers = (root) => {

    function dfs(node, num){
        if(!node) return 0;

        num = num * 10 + node.val;

        if(!node.left && !node.right) return num;

        const leftNode = dfs(node.left, num);
        const rightNode = dfs(node.right, num);

        return leftNode + rightNode;
    }

    return dfs(root, 0)
};