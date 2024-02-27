var diameterOfBinaryTree = function(root) {

    const diameter = (node, res) => {
        if(!node) return 0;

        const left = diameter(node.left, res);
        const right = diameter(node.right, res);

        res[0] = Math.max(res[0], left + right);

        return Math.max(left, right) + 1;
    }

    const res = [0];

    diameter(root, res);

    return res[0]
};