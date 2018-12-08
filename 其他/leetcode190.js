// 颠倒给定的 32 位无符号整数的二进制位。

var reverseBits = function(n) {
  var nStr = n.toString(2)
  var nArr = nStr.split('')
  while(nArr.length < 32){
    nArr.unshift("0")
  }
  var resverseArr = nArr.reverse()
  var resverseStr = resverseArr.join('')
  var result = parseInt(resverseStr, 2)
  return result
}
console.log(reverseBits(43261596))
