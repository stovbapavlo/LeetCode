let ans = [];
let tree = function (root, ans) {
    if (!root) {
        return;
    }
    if (root.left) {
        tree(root.left, ans);
    }
    ans.push(root.val);
    if (root.right) {
        tree(root.right, ans);
    }
};

tree(root, ans);
return ans;