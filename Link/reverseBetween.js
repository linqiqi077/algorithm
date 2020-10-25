/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL 
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 思路： 分为 左中右三段。除开对反转部分做操作，其他两部分主要是为了之后节点拼接做准备
var reverseBetween = function (head, m, n) {

    // 不变的左边和反转的开始
    let leftNode = null;
    let reverseStart = head;

    for (let i = 1; i < m; i++) {
        leftNode = reverseStart;
        reverseStart = reverseStart.next;
    }

    // 中间这段的反转
    let pre = reverseStart;
    let cur = reverseStart.next;
    let index = n - m;
    while (cur && index--) {
        let temp = cur.next; // 缓存下一个节点
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    // pre 是反转后的第一个节点的指针，cur 是右边没变化的节点link，reverseStart是反转后的反转link的末尾节点
    let rightNode = cur;
    if (leftNode) {
        leftNode.next = pre;
    }
    reverseStart.next = rightNode
    
    // 从第一个节点就反转的话，那么反转链首就是新的头节点，否则头节点不变。
    return m === 1 ? pre : head;

};