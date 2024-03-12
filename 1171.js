/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    let prefixSum = 0;
    let sumMap = new Map();
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;
    while(current) {
        prefixSum += current.val;
        sumMap.set(prefixSum, current)
        current = current.next;
    }

    prefixSum = 0;
    current = dummy;
    while(current) {
        prefixSum += current.val;
        current.next = sumMap.get(prefixSum).next;
        current = current.next;
    }

    return dummy.next
};