// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

/**
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 */

// node 的构造函数
function Node(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// 解题思路： 用一个新的link表去拼接对应的节点

function mergeTwoLists(link1, link2) {


    let newLink = new Node();
    let resultLink = newLink;

    while (link1 && link2) {

        if(link1.val <= link2.val) {
            newLink.next = link1;
            link1 = link1.next;
        }else {
            newLink.next = link2;
            link2 = link2.next;
        }
        newLink = newLink.next;
    }

    // 哪个链表还没遍历完，直接拼接到新的链表后面

    if(link1)newLink.next = link1;
    if(link2)newLink.next = link2;

    return resultLink.next;

}