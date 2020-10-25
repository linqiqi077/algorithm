/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
进阶：
你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
输入：head = [4,2,1,3]
输出：[1,2,3,4]
 *
 *
 */

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 思路： 先用数组存其链表，用数组的sort方法排序，然后把节点的next指针改成下一个索引的指针即可
var sortList = function (head) {
    if (!head) return head;


    let tempArr = [];
    let cur = head;

    while (cur) {
        tempArr.push(cur)
        cur = cur.next;
    }


    tempArr.sort((a, b) => {
        return a.val - b.val
    })


    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i].next = tempArr[i + 1] || null
    }

    return tempArr[0];

};