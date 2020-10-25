/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点

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
 */
// 用map记录迭代过的节点，如果出现环，把对应节点返回
const detectCycle = function (head) {
  
    let activeLink = head;
    let map = new Map()

    while(activeLink) {
        if(map.get(activeLink)) {
            return activeLink;
        }
        map.set(activeLink,activeLink);
        activeLink = activeLink.next;
    }

    return null;
};