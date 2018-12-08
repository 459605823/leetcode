// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
// 给出两个整数 x 和 y，计算它们之间的汉明距离。

// 方法一
var hammingDistance1 = function(x, y) {
    var xStr = x.toString(2)
    var yStr = y.toString(2)
    var xLen = xStr.length
    var yLen = yStr.length
    var result = 0
    // 哪个字符短，就将该字符短的部分用0填充
    if(xLen > yLen){
      yStr = Array(xLen - yLen).fill('0').join('') + yStr
    } else{
      xStr = Array(yLen - xLen).fill('0').join('') + xStr
    }
    for(var i in yStr){
      if(xStr[i] !== yStr[i]){
        result++
      }
    }
    return result
}

// 方法二 : 按位操作：超出时间限制
var hammingDistance2 = function(x, y) {
  var k = x ^ y
  var result = 0
  while(k != 0){
    if(k % 2 == 1){
      result++
      k = k >> 1
    }
  }
  return result
}
console.log(hammingDistance1(1, 4))
