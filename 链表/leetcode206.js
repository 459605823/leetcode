// 反转一个单链表
function ListNode(val){
  this.val = val;
  this.next = null;
}
// 方法一：迭代:从头开始逐个将链表元素向后移动
var reverseList = function(head) {
   var currentNode = head;
   // 向链表末尾移动元素的指向元素，初始指向null
   var reverseHead = null;
   while(currentNode != null){
     // 保存当前节点的指向元素
     var next = currentNode.next;
     // 将当前节点向末尾指定位置移动：它的next要指向上一个移动过去的节点
     currentNode.next = reverseHead;
     reverseHead = currentNode;
     // 开始移动下一个元素
     currentNode = next;
   }
   return reverseHead;
}

// 方法二：递归
var reverseList = function(head) {
  if(head==null || head.next==null){
        return head
    }
    let h = reverseList(head.next)
    head.next.next = head
    head.next = null
    return h
}
