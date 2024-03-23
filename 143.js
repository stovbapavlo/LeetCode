/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
    let stack = [];
    let node = head;


    while(node) {
        stack.push(node)
        node = node.next;
    }
    node = head;
    while (true) {
        let next = node.next;
        let newNode = stack.pop();

        if(node === newNode || next === node) {
            newNode.nwxt = null;
            break;
        }
        node.next = node;
        newNode.next = next;
        node = next
    }
    return head;
}

