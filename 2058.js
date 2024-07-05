/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let prevNode = head;
    let currNode = head.next;
    let index = 2;
    let firstCriticalIdx = -1;
    let lastCriticalIdx = -1;
    const result = [Infinity, -Infinity];

    while (currNode && currNode.next) {
        if ((currNode.val < prevNode.val && currNode.val < currNode.next.val) ||
            (currNode.val > prevNode.val && currNode.val > currNode.next.val)) {

            if (firstCriticalIdx === -1) {
                firstCriticalIdx = index;
            }

            if (lastCriticalIdx !== -1) {
                result[0] = Math.min(result[0], index - lastCriticalIdx);
                result[1] = Math.max(result[1], index - firstCriticalIdx);
            }

            lastCriticalIdx = index;
        }

        index++;
        prevNode = currNode;
        currNode = currNode.next;
    }

    result[0] = result[0] === Infinity ? -1 : result[0];
    result[1] = result[1] === -Infinity ? -1 : result[1];

    return result;

};