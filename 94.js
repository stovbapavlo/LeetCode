var inorderTraversal = function(root) {
    if(root == null) return [];

    let index = [];

    var traverse = function(node)
    {
        if(node != null){
            traverse(node.left)
            index.push(node.val)
            traverse(node.right)
        }

    }
    traverse(root);
    return index;