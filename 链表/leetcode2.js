// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
function ListNode(val){
  this.val = val;
  this.next = null;
}
// 初等数学
var addTwoNumbers = function(l1, l2) {
  // 新链表头部的伪节点
  var dummyHead = new ListNode(0)
  var l1Head = l1
  var l2Head = l2
  var curr = dummyHead
  // 进位值 0或1
  var carry = 0
  while(l1Head != null || l2Head != null){
    var l1Val = l1Head == null ? 0 : l1Head.val
    var l2Val = l2Head == null ? 0 : l2Head.val
    var sum = l1Val + l2Val + carry
    carry = parseInt(sum / 10) // 更新进位的值 0或1
    curr.next = new ListNode(sum % 10) // 设置新的节点值
    curr = curr.next
    if(l1Head != null) l1Head = l1Head.next
    if(l2Head != null) l2Head = l2Head.next
  }
  // 当链表最后出现进位时，创建新的节点
  if(carry > 0){
    curr.next = new ListNode(carry)
  }
  // dummyHead.next为新链表的头部节点
  return dummyHead.next
};
