// 删除某个链表中的给定节点
// 链表至少包含两个节点
// 给定的节点为非末尾节点并且一定是链表中的一个有效节点。

function ListNode(val){
  this.val = val;
  this.next = null;
}
// 该节点不是末尾节点
// 所以只需要将该节点“变为”他的下一个节点即可
// 将他的值变为他的下一个节点的值，他的next指向他的下一个节点的next
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
