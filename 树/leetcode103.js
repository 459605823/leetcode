// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var zigzagLevelOrder = function(root) {
  var result = []
  var flag = true
  helper(root, result, 0, flag)
  return result
}
// 前序遍历二叉树, 用一个标志记录当前是否是双数层，如果是双数层，则向数组开头插入元素，单数层向数组末尾插入元素
var helper = function(node, arr, level, flag){
    if (node == null) return
    if (level == arr.length) arr.push([])
    if(flag){
      arr[level].push(node.val)
    } else {
      arr[level].unshift(node.val)
    }
    helper(node.left, arr, level + 1, !flag)
    helper(node.right, arr, level + 1, !flag)
}
