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
 * @return {string}
 */
var tree2str = function(root) {
    function dfs(node) {
        if (!node) {
            return '';
        }
        if (node.right) {
            return `${node.val}(${dfs(node.left)})(${dfs(node.right)})`;
        }
        if (node.left) {
            return `${node.val}(${dfs(node.left)})`;
        }
        return `${node.val}`;
    }

    return dfs(root);
};

/*
if (!t) return '';
const left = tree2str(t.left);
const right = tree2str(t.right);
return t.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');*/
