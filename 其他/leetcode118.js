// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
   if(numRows == 0) return []
   if(numRows == 1) return [[1]]
   if(numRows == 2) return [[1], [1,1]]
   var result = [[1], [1,1]]
   for(var i=2;i<numRows;i++){
      var row = [1]
      // 从上一个数组的第二个数开始遍历，计算当前数组相应位置的数值
      for(var j=1;j<result[i-1].length;j++){
        row.push(result[i-1][j-1] + result[i-1][j])
      }
     row.push(1)
     result.push(row)
   }
   return result
}
