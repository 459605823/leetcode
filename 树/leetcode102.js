// 给定一个二叉树，返回其按层次遍历的节点值。
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}
// 当前节点位于二叉树中的层次刚好与数组的长度相等
// 以一个值Level来标记当前节点在二叉树中的层次，
// 当level与数组长度相等时，说明当前层的元素添加完毕，则向数组中增加[]，添加下一层的元素
var levelOrder = function(root) {
    let result = []
    helper(root, result, 0)
    return result
}

var helper = function(node, arr, level){
    if (node == null) return
    if (level == arr.length) arr.push([])
    arr[level].push(node.val)
    // 每次向左右子树移动时，层次增加，即level递增
    helper(node.left, arr, level + 1)
    helper(node.right, arr, level + 1)
}
