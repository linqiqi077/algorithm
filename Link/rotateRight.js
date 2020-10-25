// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

/**
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
 */

/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/

// 思路：拿到link的长度，得到一个切割点，切割link表，然后合并起来。
const rotateRight = function (head, k) {

    // 边界判断
    if (!head || k === 0) return head;

    let cur = head;

    let tail = null;
    let len = 0;

    while (cur) {
        len++;
        tail = cur;
        cur = cur.next;
    }

    // 找到需要切割的点,如果切割点是开头，则直接返回原来的link；
    if (k % len === 0) return head;

    let startLen = k % len;
    let changeLink = head;


    for (i = 0; i < len - startLen; i++) {
        cur = changeLink;
        changeLink = changeLink.next;
    }

    // 首尾拼接
    cur.next = null; // 切割点的做部分需要拼接一个null作为link尾
    tail.next = head; // 尾巴部分做一个link到之前的link头

    return changeLink; // 修改部分变成link的头节点，直接返回头节点即可
}
