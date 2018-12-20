// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 回溯法：跟踪目前放置的左括号和有括号的数目，在保持序列有效时才添加"("和")"
var generateParenthesis = function(n) {
   var result = []
   backtrack(result, "", 0, 0, n)
   return result
}

var backtrack = function(arr, curStr, left, right, max) {
  // 当所有位置用完时，将该字符串添加到结果数组中
  if(curStr.length == 2 * max){
    arr.push(curStr)
    return
  }
  // 还有位置时，可以放置一个左括号
  if(left < max){
    backtrack(arr, curStr + "(", left + 1, right, max)
  }
  // 当右括号数量小于左括号时，可以放置一个右括号
  if(right < left){
    backtrack(arr, curStr + ")", left, right + 1, max)
  }
}

console.log(generateParenthesis(3))
