// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 初始状态下，所有 next 指针都被设置为 NULL。
// 你只能使用额外常数空间。
// 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
// 你可以假设它是一个完美二叉树（即所有叶子节点都在同一层，每个父节点都有两个子节点）。

function TreeNode(val) {
   this.val = val;
   this.left = this.right = this.next = null;
}

var connect = function(root) {
  if(root == null || root.left == null) return
  connectNodes(root.left, root.right)
}

var connectNodes = function(node1, node2){
  node1.next = node2
  if(node1.left != null){
    connectNodes(node1.left, node1.right)
    connectNodes(node1.right, node2.left)
    connectNodes(node2.left, node2.right)
  }
}
