/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let FrString = ScString = '';
    let node = head;

    while(node != null) {
        FrString = `${FrString}${node.val}`
        ScString = `${node.val}${ScString}`
        node = node.next
    }

    return FrString === ScString
};