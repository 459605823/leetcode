// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
// 因为数组为升序数组，所以可取数组中间位置的值作为根节点，左边部分的值作为左子树，右边部分的值作为右子树
var sortedArrayToBST = function(nums) {
  if(nums.length == 0){
    return null
  }
  return buildTree(nums, 0, nums.length-1)
}
var buildTree = function(array, minIndex, maxIndex) {
  if(minIndex > maxIndex){
    return null
  }
  // 数组中间位置的值作为根节点
  var midIndex = parseInt((minIndex + maxIndex + 1) / 2)
  var root = new TreeNode(array[midIndex])
  // 下标小于midIndex的为左子树
  root.left = buildTree(array, minIndex, midIndex-1)
  // 下标大于midIndex的为右子树
  root.right = buildTree(array, midIndex+1, maxIndex)
  return root
}
