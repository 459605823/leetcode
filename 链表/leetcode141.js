// 给定一个链表，判断链表中是否有环。
function ListNode(val){
  this.val = val;
  this.next = null;
}

// 追击问题：如果链表中不存在环，快指针将会最先到达尾部，返回false
var hasCycle = function(head) {
  if(head == null || head.next == null){
      return false
  }
  let slow = head
  let fast = head.next
  while(fast != slow){
    // 当快指针到达链表尾部时，返回false
    if(fast == null || fast.next == null){
        return false
    }
    // 快指针每次移动两步，满指针一次移动一步
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
