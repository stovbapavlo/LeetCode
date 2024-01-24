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
var pseudoPalindromicPaths  = function(root) {
    return dfs(root, 0);
};
/**
 * @param {TreeNode} root
 * @param {number} mask
 * @return {number}
 */

var dfs = function(root, mask) {
    if (!root) {
        return 0;
    }

    mask ^= 1 << root.val;

    if (!root.left && !root.right) {
        return (mask & (mask - 1)) === 0 ? 1 : 0;
    }

    return dfs(root.left, mask) + dfs(root.right, mask);
};


/*
* pseudoPalindromicPaths  = r => {

    let res = 0

    f = (r, a, s) => {
        a[r.val]++
        s++
        if (!r.left && !r.right) g(a, s)
        if (r.left) f(r.left, a, s)
        if (r.right) f(r.right,a, s)
        a[r.val]--
    }

    g = (a,s) => {
        let t = 0
        for (let e of a) t += e & 1
        res += t <= (s & 1)
    }

    f(r, Array(10).fill(0), 0)

    return res
}
* */