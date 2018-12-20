// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 方法一
var letterCombinations = function(digits) {
    var map = {
      "2": ["a", "b", "c"],
      "3": ["d", "e", "f"],
      "4": ["g", "h", "i"],
      "5": ["j", "k", "l"],
      "6": ["m", "n", "o"],
      "7": ["p", "q", "r", "s"],
      "8": ["t", "u", "v"],
      "9": ["w", "x", "y", "z"]
  }
  var ans = map[digits[0]]
  var lastDigits = digits.slice(1).split("")
  lastDigits.forEach(function(digit){
    var arr = []
    map[digit].forEach(function(letter){
    // arr为在之前拼接字符串数组的基础上加上当前数字对应字母的新的字符串数组
      arr = arr.concat(ans.map(function(item){
        return item + letter
      }))
    })
   // 更新基础字符串数组
    ans = arr
  })
  return ans
}

// 方法二 回溯递归
var letterCombinations = function(digits) {
   if(digits === ""){
     return []
   }
    var map = {
      "2": ["a", "b", "c"],
      "3": ["d", "e", "f"],
      "4": ["g", "h", "i"],
      "5": ["j", "k", "l"],
      "6": ["m", "n", "o"],
      "7": ["p", "q", "r", "s"],
      "8": ["t", "u", "v"],
      "9": ["w", "x", "y", "z"]
  }
  var ans = map[digits[0]]
  var result = []
  for(var i = 0; i < ans.length; i++){
    // 剩余的数字
    var lastNumber = digits.slice(1)
    // 剩余数字所能组合成的字符串数组
    var comArr = lastNumber === "" ? [""] : letterCombinations(lastNumber)
    for(var j = 0; j < comArr.length; j++){
      result.push(ans[i] + comArr[j])
    }
  }
  return result
}
console.log(letterCombinations("23"))
