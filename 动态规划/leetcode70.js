// 假设你正在爬楼梯，需要n阶你才能到达楼顶
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// n个台阶的爬楼方法 = 一开始爬一步的方法数 + 一开始爬两步的方法数 = f(n-1) + f(n-2) = [f(n-2)+f(n-3)]+[f(n-3)+f(n-4)] = ..

// 斐波那契数列: 1,2,3,5,8,13 ...
// f(n) = f(n-1) + f(n-2)

// 方法一：递归解法超时
function fn(n) {
  if(n <= 2){
    return n
  }
   return fn(n-1) + fn(n-2)
}

// 方法二: 非递归解法
var climbStairs = function(n) {
  if (n <= 2){
    return n
  }
  var sum = 0
  var no1 = 1
  var no2 = 2
  while(n > 2){
    // 下一个数
    sum = no1 + no2
    // no1,no2位置向前移动
    no1 = no2
    no2 = sum
    n--
  }
  return sum
}
console.log(climbStairs(6))
