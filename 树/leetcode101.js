// 给定一个二叉树，判断其是否是镜像对称的
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
// 当满足以下条件时，两个树互为镜像：
// 1.他们的两个根节点具有相等的值
// 2.每一个树的右子树都和另一个树的左子树相等
var isSymmetric = function(root){
  return isMirror(root, root)
}

var isMirror = function(node1, node2){
  if(node1 == null && node2 == null){
    return true
  }
  if(node1 == null || node2 == null){
    return false
  }
  return (node1.val == node2.val) && isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right)
}
