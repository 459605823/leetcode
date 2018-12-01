// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

function ListNode(val){
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  // 放置在开头的伪节点
    var newListHead = new ListNode(0);
    var currentNode = newListHead;
    if(l1 == null && l2 == null){
      return null;
    }
    while(l1 != null && l2 != null){
      if(l1.val < l2.val){
        currentNode.next = l1;
        currentNode = currentNode.next;
        l1 = l1.next;
      } else {
        currentNode.next = l2;
        currentNode = currentNode.next;
        l2 = l2.next;
      }
    }
    // 如果任一链表为空，则直接连接另一个链表
    if (l1 == null){
      currentNode.next = l2;
    } else {
      currentNode.next = l1;
    }
    return newListHead.next;
}
