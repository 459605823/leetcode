// 编写一个程序，找到两个单链表相交的起始节点。
// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
function ListNode(val){
  this.val = val;
  this.next = null;
}

// 链表相交不是单纯的节点值相等，相交的意思是两个链表的部门节点的是同一个，就是这些节点为这两个链表共有。
// 两个链表相交后，相交节点后的节点全部共用
// eg: 5->3->2->1 和 6->4->3->2->1 是相交链表
// 1->2->3 和 1不是相交链表，相交链表在相交节点之后的元素必须全部相同

// 方法一：将两个链表移至相同的起点进行遍历，判断是否存在相同节点
var getIntersectionNode = function(headA, headB) {
   if(headA == null || headB == null) return null
   // 获取两个链表的长度及长度差值
   var lenA = getLength(headA),
       lenB = getLength(headB),
       diff = Math.abs(lenA - lenB)
   // 将长度较长的链表移动至共同起点
  for(var i = 0; i < diff; i++){
    if (lenA > lenB) headA = headA.next
    else headB = headB.next
  }
  // 从相同起点开始遍历判断是否存在相同节点
  var curLen = Math.min(lenA, lenB)
  for(var i = 0; i < curLen; i++){
    if(headA == headB){
      return headA
    }
    headA = headA.next
    headB = headB.next
  }
  return null
}

var getLength = function(head) {
  var len = 0
  while (head != null){
    len++
    head = head.next
  }
  return len
}

// 方法二 ：定义两个指针, 第一轮让两个到达末尾的节点指向另一个链表的头部, 最后如果相遇则为交点(在第一轮移动中恰好抹除了长度差)
// 两个指针等于移动了相同的距离, 有交点就返回, 无交点就是各走了两条指针的长度
// 如果两个链表长度相同且有交点，在第一轮相同时就会返回交点
// 如果两个链表长度不同有交点，在第二轮相同时就会返回交点
// 如果两个链表长度相同且没有交点，在第一轮结束pA和pB会同时为null, 返回null
// 如果两个链表长度不同没有交点，在第二轮结束会同时为null, 返回null
var getIntersectionNode2 = function(headA, headB) {
  if(headA == null || headB == null) return null
  var pA = headA, pB = headB
  // 第一轮体现在pA和pB在第一次到达尾部会移向另一个链表的表头
  // 第二轮体现在pA和pB如果相交就返回交点，不相交最后就是null == null
  while(pA != pB){
    pA = pA == null ? headB : pA.next
    pB = pB == null ? headA : pB.next
  }
  return pA
}
