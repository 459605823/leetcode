// 给定一个二叉树，找出其最大深度。
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
// 递归:二叉树的深度即为左子树或右子树的最大高度
var maxDepth = function(root) {
   if(root == null){
     return 0
   } else {
     var left_Depth = maxDepth(root.left)
     var right_Depth = maxDepth(root.right)
     // +1即为每次高度计数加一
     return Math.max(left_Depth, right_Depth) + 1
   }
}
