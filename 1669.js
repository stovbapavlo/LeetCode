/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = function(list1, a, b, list2) {
    const list2Tail = getTailOfAList(list2);
    const head = new ListNode(-1, list1);
    const arr = [head];
    let cur = list1;

    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }

    arr.push(null);

    arr[a].next = list2;
    list2Tail.next = arr[b + 2];


    return arr[0].next;
};

function getTailOfAList(list) {
    let cur = list;

    while (cur.next) {
        cur = cur.next;
    }

    return cur;
}