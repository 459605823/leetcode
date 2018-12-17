// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
// 应当保持奇数节点和偶数节点的相对顺序。
// 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
function ListNode(val){
  this.val = val;
  this.next = null;
}

var oddEvenList = function(head) {
  if(head == null || head.next == null){
    return head
  }
  // 奇数链表头部指针
  var odd = head
  // 偶数链表头部指针
  var even = head.next
  var evenHead = even
  while(odd.next != null && even.next != null){
    // 奇数链表相连
    odd.next = even.next
    odd = odd.next
    // 偶数链表相连
    even.next = odd.next
    even = even.next
  }
  // 将偶数链表头部连接奇数链表
  odd.next = evenHead
  return head
}
