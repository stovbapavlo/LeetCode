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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];

    function dfs(node, path) {
        if (!node) return;
        path.push(node.val.toString());
        if (!node.left && !node.right) {
            paths.push(path.join('->'));
        } else {
            dfs(node.left, path.slice()); // Copy the path array
            dfs(node.right, path.slice()); // Copy the path array
        }
    }

    dfs(root, []);
    return paths;
};