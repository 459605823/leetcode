// 给定一个二叉树，判断其是否是排序二叉树
// 一个节点右子树中的所有元素都大于这个根节点
// 一个节点左子树中的所有元素都小于这个根节点
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
// 通过方法：min,max分别代表子树的最小值的最大值，右子树一定大于min，左子树一定大于max
// 记录每个子树的min和max，然后遍历各个子树
var isValidBST = function(root){
  return isValid(root, null, null)
}
var isValid = function(root, min, max){
  if(root == null) return true
  if(min != null && root.val <= min) return false
  if(max != null && root.val >= max) return false
  return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
}

// 前序遍历出错：只考虑了各个子树中的情况，没有考虑子树中的元素与最初的根节点的大小关系
var isValidBST = function(root) {
    if(root == null || (root.left == null && root.right == null)){
      return true
    }
    if(root.left != null){
      if(root.left.val > root.val || root.left.val == root.val){
        return false
      }
    }
    if(root.right != null){
      if(root.right.val < root.val || root.right.val == root.val){
        return false
      }
    }
    return isValidBST(root.left) && isValidBST(root.right)
}

// 中序遍历：左-根-右 中序遍历二叉树输出的数列是递增数列
// 先用中序遍历二叉树将二叉树中的数据保存在数组中，然后循环查看数组中是否有逆序的情况
var isValidBST1 = function(root){
  if(root == null || (root.left == null && root.right == null)){
    return true
  }
  var arr = []
  var index = 0
  // 中序遍历将树中的数据保存在数组中
  inOrderTraverseNode(root, arr, index)
  for(var i=1;i<index;i++){
    // 如果数组中有逆序的情况就返回false
    if(arr[i] <= arr[i-1]){
      return false
    }
  }
  return true
}
var inOrderTraverseNode = function(root, array, counter){
  // 左
  if(root.left != null){
    inOrderTraverseNode(root.left, array, counter)
  }
  // 根
  array[counter] = root.val
  counter++
  // 右
  if(root.right != null){
    inOrderTraverseNode(root.right, array, counter)
  }
  return
}
