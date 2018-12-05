// 统计所有小于非负整数 n 的质数的数量。
// 质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数。

var countPrimes = function(n){
  var count = 0
  for(var i=2;i<n;i++){
    if(isPrimes(i)){
      count += 1
    }
  }
  return count
}

var isPrimes = function(num){
  // 2是质数
  if(num == 2){
    return true
  } else if(num % 2 == 0){ // 排除偶数
    return false
  }
  // 一次判断能否被奇数整除，最大循环次数为该数的开方
  var squareRoot = Math.sqrt(num)
  // 2已验证，所以从3开始，因为已经排除偶数，所以每次加二，判断能否被奇数整除
  for(var i=3; i<=squareRoot; i+=2){
    if(num % i == 0){
      return false
    }
  }
  return true
}
console.log(countPrimes(10))
