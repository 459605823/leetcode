// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

// 方法一: O(m + n) 用一个长度为m的一维数组记录各行中是否有0，用一个长度为n的一维数组记录各列中是否有0，最后直接更新matrix数组即可
var setZeroes2 = function(matrix) {
  var rows = matrix.length
  var cols = matrix[0].length
  if(rows == 0 || cols == 0){
    return
  }
  // 用两个一维数组记录各行中是否有0
  var rowArr = new Array(rows)
  var colArr = new Array(cols)
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      if(matrix[i][j] == 0){
        rowArr[i] = true
        colArr[j] = true
      }
    }
  }
  // 跟据一维数组的记录值更新矩阵
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      if(rowArr[i] || colArr[j]){
        matrix[i][j] = 0
      }
    }
  }
}

// 方法二: 常数空间 用原数组的第一行第一列来记录各行各列是否有0
// - 先扫描第一行第一列，如果有0，则将各自的flag设置为true
// - 然后扫描除去第一行第一列的整个数组，如果有0，则将对应的第一行和第一列的数字赋0
// - 再次遍历除去第一行第一列的整个数组，如果对应的第一行和第一列的数字有一个为0，则将当前值赋0
// - 最后根据第一行第一列的flag来更新第一行第一列
var setZeroes3 = function(matrix) {
  var rows = matrix.length
  var cols = matrix[0].length
  if(rows == 0 || cols == 0){
    return
  }
  var rowZero = false, colZero = false
  // 遍历第一行，如果有0，则flag为true,之后需要将第一行置为0
  for(var i = 0; i < cols; i++){
    if(matrix[0][i] == 0) rowZero = true
  }
  // 遍历第一列，如果有0，则flag为true,之后需要将第一列置为0
  for(var i = 0; i < rows; i++){
    if(matrix[i][0] == 0) colZero = true
  }
  // 扫描除去第一行第一列的整个数组，如果有0，则将对应的第一行和第一列的数字赋0
  for(var i = 1; i < rows; i++){
    for(var j = 1; j < cols; j++){
      if(matrix[i][j] == 0){
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  // 再次遍历除去第一行第一列的整个数组，如果对应的第一行和第一列的数字有一个为0，则将当前值赋0
  for(var i = 1; i < rows; i++){
    for(var j = 1; j < cols; j++){
      if(matrix[i][0] == 0 || matrix[0][j] == 0){
        matrix[i][j] = 0
      }
    }
  }
  // 如果第一行flag为true，则将第一行元素全部置为0
  if(rowZero){
    for(var i = 0; i < cols; i++){
      matrix[0][i] = 0
    }
  }
  // 如果第一列flag为true，则将第一列元素全部置为0
  if(colZero){
    for(var i = 0; i < rows; i++){
      matrix[i][0] = 0
    }
  }
}
