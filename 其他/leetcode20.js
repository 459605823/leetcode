// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 有效表达式的子表达式也应该是有效表达式
// 利用栈结构处理，遇到开括号就将相应的闭括号推入栈中
// 遇到闭括号，就检查栈顶元素是否是相同的闭括号
var isValid = function(s) {
  let stack = []
  for (let c of s) {
      if (c == "(") stack.push(")")
      else if (c == "[") stack.push("]")
      else if (c == "{") stack.push("}")
      else {
          if (stack.length == 0) return false
          if (stack.pop() != c) return false
      }
  }
  return stack.length == 0
}
console.log(isValid("()[]{}"))
