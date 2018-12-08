// 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
// 汉明重量是一串符号中非零符号的个数

var hammingWeight = function(n) {
  var numStr = n.toString(2)
  var result = 0
  for(var c of numStr){
    if(c == "1"){
      result++
    }
  }
  return result
}

console.log(hammingWeight(128))
