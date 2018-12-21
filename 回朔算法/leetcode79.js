// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

var exist = function(board, word) {
   for(let i = 0; i < board.length; i++){
     for(let j = 0; j < board[0].length; j++){
       // 对于二维网格内的每一个字母，均以其为开头寻找是否存在相应单词
       if(find(board, word, i, j, 0)) return true
     }
   }
   return false
}
// 以二维网格内的每个字母作为开头进行查找，持续对其上下左右字母进行查找判断
// 当达到结束条件时返回true，达到边界条件时返回false
var find = function(board, word, y, x, len) {
   // 结束条件
   if(len == word.length) return true
   // 边界情况
   if(y < 0 || x < 0 || y >= board.length || x >= board[y].length || board[y][x] != word[len]) return false
   // 每次判断该字符的上下左右情况时,要将该字符临时置为其他值，避免重复使用该值
   var temp = board[y][x]
   board[y][x] = "*"
   let exist = find(board, word, y, x + 1, len + 1) // 右
     || find(board, word, y, x - 1, len + 1) // 左
     || find(board, word, y + 1, x, len + 1) // 上
     || find(board, word, y - 1, x, len + 1) // 下
   // 恢复该值
   board[y][x] = temp
   return exist
}
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))
