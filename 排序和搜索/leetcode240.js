// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

var searchMatrix = function(matrix, target) {
  if(matrix.length == 0) return false
  var i = 0
  var j = matrix[0].length - 1
  var rows = matrix.length
  while(i < rows && j >= 0){
    if(matrix[i][j] == target){
      return true
    }
    // 当目标值大于该行的最大值时，到下一行查找
    if(matrix[i][j] < target){
      i++
    } else { // 小于时继续在该行向前查找
      j--
    }
  }
  return false
}

// 调用库函数
var searchMatrix = function(matrix, target) {
  for(var i = 0;i < matrix.length; i++){
    if(matrix[i].indexOf(target) != -1){
      return true
    }
  }
  return false
}
