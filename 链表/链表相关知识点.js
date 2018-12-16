// 定义
// 链表是由一组节点组成的集合。每一个节点都使用一个对象的引用指向它的后续借点。指向另外一个节点的引用叫做链。
// 遍历链表就是跟着链表从链表的头元素（head）一直走到尾元素（但是不包含链表的头借点，头通常用来作为链表的接入点）
// 链表的尾元素指向一个null节点。

// 链表解题技巧: var dummyHead = new ListNode(0) 设置一个指向链表head的伪节点

// node类标识节点：val用来保存节点上的数据，next用来保存指向下一个节点的链接
function Node(val){
    this.val = val;
    this.next = null;
}
// LinkedList类提供了对链表进行操作的方法
// 链表只有一个属性，那就是使用一个node对象来保存该链表的头节点
function linkedList(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}
// find方法从头部开始遍历链表，寻找保存指定数据的节点
function find(item){
  var currNode = this.head;
  while (currNode.val != item){
    currNode = currNode.next;
  }
  return currNode;
}
// 向链表中某个元素之后插入节点：需要修改它前面的节点，使其指向新加入的节点，而新加入的节点则指向前面指向的节点
function insert(newElement, item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

// 查找某一个节点的前一个节点
function findPrevious(item){
  var currNode = this.head;
  while(!(currNode.next == null) && (currNode.next.val != item)){
    currNode = currNode.next;
  }
  return currNode;
}

// 从链表中删除一个节点: 将待删除的元素的前续节点指向待删除的后续节点，同时将待删除元素指向null来释放。
function remove(node) {
  var prevNode = this.findPrevious(node);
  if(prevNode.next != null){
    prevNode.next = prevNode.next.next;
  }
}
// 打印链表
function display(){
  var currNode = this.head;
  while (!(currNode.next == null)){
    document.write(currNode.next.val + '&nbsp;');
    currNode = currNode.next;
  }
}
