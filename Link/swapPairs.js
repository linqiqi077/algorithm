/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 输入：head = [1,2,3,4]
输出：[2,1,4,3]
 *
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 每一次先记录下一个开始的头节点。然后再进行内部节点的调换
 */
var swapPairs = function (head) {
    // 边界判断
    if (!head || !head.next) return head;
    // 有2个以上的节点，头节点肯定是第二个
    let newHead = head.next;

    let pre = head;
    let cur = head.next;

    while (cur) {

        // 缓存下一个节点开头
        const temp = cur.next;

        // 前面2个节点两两交换
        cur.next = pre;
        // 如果temp.next有，则指向temp.next，没有则直接指向temp
        pre.next = (temp && temp.next) || temp;

        // 重置cur和pre
        pre = temp;
        // 如果temp.next有，则指向temp.next，没有则直接指向temp
        cur = (temp && temp.next) || temp;
    }

    return newHead;
};