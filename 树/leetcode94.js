// 给定一个二叉树，返回它的中序 遍历。
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
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
