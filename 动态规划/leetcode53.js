// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 方法一:两次遍历
var maxSubArray = function(nums) {
  // Number.MIN_VALUE表示最小正数即最接近 0 的正数 (实际上不会变成 0)
  var max = Number.MIN_SAFE_INTEGER
  var sum
  for(var i=0;i<nums.length;i++){ // 子序列的左端点
    // 左端点改变时需要将sum重置为0
    sum = 0
    for(var j=i;j<nums.length;j++){// 子序列的右端点
      sum += nums[j]
      if(sum > max){
        max = sum
      }
    }
  }
  return max
}

// 方法二：动态规划
// 设sum[i]为以第i个元素结尾且和最大的连续子数组。假设对于元素i，所有以它前面的元素结尾的子数组的长度都已经求得，
// 那么以第i个元素结尾且和最大的连续子数组实际上，要么是以第i-1个元素结尾且和最大的连续子数组加上这个元素，要么是只包含第i个元素，
// 即sum[i] = max(sum[i-1] + a[i], a[i])。可以通过判断sum[i-1] + a[i]是否大于a[i]来做选择，
// 而这实际上等价于判断sum[i-1]是否大于0。所以遍历过程中要记录前i-1项的和，在加该项时进行判断
var maxSubArray = function(nums){
  // sum即sum[i-1]，记录前i-1项的和
  var sum = max = nums[0]
  for(var i=1;i<nums.length;i++){
  // 当前i-1项和大于0时，sum[i] = sum[i-1]+a[i]
    if(sum > 0) {
      sum = sum + nums[i]
    } else {
  // 否则sum[i] = a[i]
      sum = nums[i]
    }
    if(sum > max){
      max = sum
    }
  }
  return max
}
console.log(maxSubArray([-1]))
