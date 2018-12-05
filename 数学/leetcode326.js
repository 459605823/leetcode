// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
// 你能不使用循环或者递归来完成本题吗？

// 方法一: 不用循环和递归
// 1162261467为整数范围内最大的3的幂次 = 3的19次幂
var isPowerOfThree = function(n) {
  return n > 0 && 1162261467 % n == 0;
}

// 方法二: 使用循环递归
var isPowerOfThree2 = function(n) {
  if(n < 1){
    return false
  }
  while(n > 1){
    if(n % 3 != 0){
      return false
    }
    n /= 3
  }
  return true
}
console.log(isPowerOfThree2(9))
