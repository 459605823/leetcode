// 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
// 你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var kthSmallest = function(root, k) {
   var arr = inorderTraversal(root)
   return arr[k - 1]
}

var inorderTraversal = function(root) {
    var result = []
    return inorder(root, result)
}

var inorder = function(node, array){
  if(node != null){
    inorder(node.left, array)
    array.push(node.val)
    inorder(node.right, array)
  }
  return array
}
