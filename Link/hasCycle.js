/**
 * 给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false .  

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
 *
*/


/**
 * @param {ListNode} head
 * @return {boolean}
 * 解题思路：
 * 1. 快慢指针
 * 2. set记录走过的节点，如果出现重复的，说明有环
 */

// 快慢指针
// const hasCycle = function (head) {
//     let fast = head;
//     let slow = head;
//     while(fast&&slow) {
//          fast = fast?.next;
//          slow = slow?.next?.next;
//         if(fast===slow) {
//             return true
//         }
//     }
//     return false;
// };


// 2.用set判断是否已经走过曾经走过的节点

const hasCycle = function (head) {
    let set = new Set();

    while (head) {
        if (set.has(head)) {
            return true
        }
        set.add(head)
        head = head.next;
    }
    return false;
}