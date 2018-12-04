// 打家劫舍:给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
// 不能同时计算数组的相邻元素

var rob = function(nums) {
  let a = 0, b = 0
  for (let i = 0; i < nums.length; i++) {
      if (i % 2 == 0){
          a = Math.max(b, a + nums[i])
      } else {
          b = Math.max(a, b + nums[i])
      }
  }
  return Math.max(a, b)
}
