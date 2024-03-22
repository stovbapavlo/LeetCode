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
    let slow = head;
    let fast = head;

    while (fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;
    while (slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let left = head;
    let right = prev;

    while (right){
        if (right.val !== left.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};