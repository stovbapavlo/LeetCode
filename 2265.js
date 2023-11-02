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
var averageOfSubtree = function(root) {
    result = 0;

    const traverse = node => {
        if(!node) return [0, 0];

        const[leftSum, leftCounter] = traverse(node.left);
        const[rightSum, rightCounter]= traverse(node.right);

        const currSum =node.val + leftSum + rightSum;
        const currCounter = 1 + leftCounter + rightCounter;

        if(Math.floor(currSum / currCounter) === node.val) result++;

        return[currSum, currCounter]
    };
    traverse(root);
    return result;
};