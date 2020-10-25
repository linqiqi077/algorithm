/**
 * 反转一个单链表。
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 */

/**
* @param {ListNode} head
* @return {ListNode}
* 思路： 当前的下一个指向上一个，往前指，但是为了避免指针丢失，下一个需要先缓存，这样之后的指针都不会丢失
*/

const reverseList = function (head) {

    let cur = head;
    let pre = null;

    while (cur) {
        // 避免指针丢失，缓存下一个节点
        let temp = cur.next;
        cur.next = pre;
        pre = cur;

        if(temp) {
            cur = temp;
        }else {
            return cur;
        }
    }

    return cur;
}