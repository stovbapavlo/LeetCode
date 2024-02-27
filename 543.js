var diameterOfBinaryTree = function(root) {
    let ret = 0;
    let trav = (node)=>{
        if(!node) return 0;
        const left = trav(node.left);
        const right = trav(node.right);
        if( left+right > ret ) ret = left+right;
        return left > right ? left+1 : right+1;
    }
    trav(root);
    return ret;
};