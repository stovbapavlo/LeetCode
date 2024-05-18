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
var distributeCoins = function(root) {
    const dfs = (curNode, parent) => {
        if (curNode === null) {
            return 0;
        }
        let moves = dfs(curNode.left, curNode) + dfs(curNode.right, curNode);
        let fromThis = curNode.val - 1;
        parent.val += fromThis;
        moves += Math.abs(fromThis);
        return moves;
    };

    return dfs(root, new TreeNode());
};