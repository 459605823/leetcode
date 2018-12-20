// 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。
// 一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围
/**
 * @param {character[][]} grid
 * @return {number}
 */

 // 深度优先搜索
 var numIslands = function (grid) {
     if (grid.length == 0) return 0
     let count = 0
     for (let i = 0; i < grid.length; i++) {
         for (let j = 0; j < grid[0].length; j++) {
             if (grid[i][j] == 1) {
                 count++
                 helper(i, j, grid)
             }
         }
     }
     return count
 }
// 每遇到一块陆地，就对该陆地的上下左右进行访问，将该陆地的所有领域都标记为已访问过
// 当遇到新陆地时，该陆地一定属于另一个板块
 function helper(i, j, grid) {
   // 标记访问过的领域
     grid[i][j] = "visited"
     if (i > 0 && grid[i - 1][j] == 1) // 上
         helper(i - 1, j, grid)
     if (i < grid.length - 1 && grid[i + 1][j] == 1) // 下
         helper(i + 1, j, grid)
     if (j > 0 && grid[i][j - 1] == 1) // 左
         helper(i, j - 1, grid)
     if (i < grid[0].length + 1 && grid[i][j + 1] == 1) // 右
         helper(i, j + 1, grid)
 }
