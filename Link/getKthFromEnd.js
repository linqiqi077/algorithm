/**
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
 *
 */
/**
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 返回链表 4->5.
 */

/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/

// 思路: 先拿到链表的长度，然后拿到要切割的点之后的节点，拼接到前面
const getKthFromEnd = function (head, k) {

    if (!head) return head;

    let cur = head;
    let len = 0;

    while (cur) {
        len++
        cur = cur.next;
    }

    cur = head;
    for (let i = 0; i < len - k; i++) {
        cur = cur.next;
    }
    return cur;

}