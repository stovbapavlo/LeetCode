var maxAncestorDiff = function(root) {

    const dfs = (node, max, min) => {
        if (!node) return max - min;

        const left = dfs(node.left, Math.max(node.val, max), Math.min(node.val, min));
        const right = dfs(node.right, Math.max(node.val, max), Math.min(node.val, min));

        return Math.max(left, right);
    }

    return dfs(root, -Infinity, +Infinity);
};