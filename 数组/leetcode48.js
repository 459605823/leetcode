// 给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。
// 说明：
// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

var rotate = function(matrix) {
  // 先逆置数组
  matrix.reverse()
  // 之后只用交换对称位置的元素
  for(var i=0;i<matrix.length;i++){
    for(var j=i+1;j<matrix[0].length;j++){
      var temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
}
var matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
console.log(matrix)
