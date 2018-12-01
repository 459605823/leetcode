// 判断一个链表是否为回文链表
function ListNode(val){
  this.val = val;
  this.next = null;
}

// 方法一：使用一个数组储存链表中的数据，然后再逆置数组与链表进行比较，判断是否相等
// 128ms 不满足空间复杂度O（1）
var isPalindrome = function(head) {
   var arr = [];
   var node = head;
   while(node != null){
     arr.push(node.val);
     node = node.next;
   }
   var reverseArr = arr.reverse();
   for(var i=0,len=reverseArr.length;i<len;i++){
     if(head.val != reverseArr[i]){
       return false;
     }
     head = head.next;
   }
   return true;
}

// 方法二: 判断回文即判断链表对称位置上的元素是否相等：将指针移动到链表的中间位置，然后逆置链表，判断对称位置的元素是否想等
// 1221 > 12 21 > 12=revese(21)  123321 > 123 321 > 123=reverse(321)
var isPalindrome = function(head) {
  // 如果为空链表或链表只有一个元素，即为回文链表
    if(head == null || head.next == null){
        return true
    }
    let slow = head
    let fast = head
    while(fast.next != null && fast.next.next != null){
        fast = fast.next.next
        // slow表示位于中间位置的节点
        slow = slow.next
    }
    // slow.next为后半部分链表的头
    slow = reverseList(slow.next)
    while(slow != null){
        if (slow.val != head.val) {
            return false
        }
        slow = slow.next
        head = head.next
    }
    return true
}
// 反转链表
var reverseList = function(head) {
   var currentNode = head;
   var reverseHead = null;
   while(currentNode != null){
     var next = currentNode.next;
     currentNode.next = reverseHead;
     reverseHead = currentNode;
     currentNode = next;
   }
   return reverseHead;
}
