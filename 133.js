/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
const clone = new Map();
var cloneGraph = function(node) {
    if (!node) return null;
    if (clone.has(node)) return clone.get(node);

    const newNode = new Node(node.val);
    clone.set(node, newNode);
    newNode.neighbors = node.neighbors.map(x => cloneGraph(x));

    return newNode;
};