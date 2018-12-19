// 根据一棵树的前序遍历与中序遍历构造二叉树。
// 你可以假设树中没有重复的元素。

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
// preorder的第一个元素为root
var buildTree = function(preorder, inorder) {
  return helper(0, 0, inorder.length - 1, preorder, inorder)
}
// 在inorder中找到root，在它之前的元素为左子树（长度为l1=inIndex-inStart),在它之后的元素为右子树（长度为l2=inorder.length-inIndex-1)
// preorder[0]到preorder[l1]为左子树, 之后为右子树，分别递归
var helper = function(preStart, inStart, inEnd, preorder, inorder) {
  if(preStart > preorder.length - 1 || inStart > inEnd){
    return null
  }
  // preorder中的元素为当前子树的root
  var root = new TreeNode(preorder[preStart])
  var inIndex = 0
  // 在inorder中找到root
  for(var i = inStart; i <= inEnd; i++){
    if(inorder[i] == root.val){
      inIndex = i
    }
  }
  // preorder[preStart+1]到preorder[preStart+1+inIndex]为左子树，对应inorder[inStart]到inorder[inIndex-1]
  root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder)
  // preorder[preStart+inIndex-inStart+1]到preorder[preorder.length-1]为左子树，对应inorder[inIndex+1]到inorder[inEnd]
  root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder)
  return root
}
