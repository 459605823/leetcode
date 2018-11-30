// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
function ListNode(val){
  this.val = val;
  this.next = null;
}
// 方法一：删除倒数第n个节点可转化为删除从开头数起的第（l-n+1)个节点 l为链表长度
var removeNthFromEnd1 = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let length = 0;
  let first = head;
  // 第一次遍历获得链表长度
  while(first != null){
    first = first.next;
    length++;
  }
  // 找到第L-n个元素
  length = length - n;
  first = dummy;
  while(length > 0){
    length--;
    first = first.next;
  }
  // 将第l-n个元素指向第l-n+2个元素，即删去第l-n+1个节点
  first.next = first.next.next;
  return dummy.next;
}

// 方法二：双指针：第一个指针先从开头向前移动n+1步，第二个指针从开头出发，此时两个指针被n个节点分开，
// 保持这个间隔同时移动这两个指针，直到第一个指针到达最后一个节点，此时第二个指针就指向倒数第n个节点
var removeNthFromEnd2 = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  // 将第一个指针向前移动n+1步
  for(let i=0;i<n+1;i++){
    first = first.next;
  }
  // 保持n个间隔将两个指针同时向后移动，直到第一个指针移动到链表末尾
  while(first != null){
    first = first.next;
    second = second.next;
  }
  // 此时第二个指针就指向倒数第n个元素
  second.next = second.next.next;
  return dummy.next;
}
