// 判断一个9x9的数独是否有效
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

// 方法一:使用set
// Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。
var isValidSudoku = function(board) {
  const rows = board.length
  const cols = board[0].length
  for(let i=0;i<rows;i++){
    let row = new Set()
    let col = new Set()
    let rect = new Set()
    for(let j=0;j<cols;j++){
      if(board[i][j] != "." && row.has(board[i][j])){
        return false
      } else {
        row.add(board[i][j])
      }
      if(board[j][i] != "." && col.has(board[j][i])){
        return false
      } else {
        col.add(board[j][i])
      }
      let rowIndex = (3 * parseInt(i / 3)) + parseInt(j / 3)
      let colIndex = 3 * (i % 3) + j % 3
      console.log(rowIndex + "-" + colIndex)
      const item = board[rowIndex][colIndex]
      if(item != "." && rect.has(item)){
        return false
      } else {
        rect.add(item)
      }
    }
  }
  return true
}
let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
console.log(isValidSudoku(board))
