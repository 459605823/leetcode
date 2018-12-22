// 峰值元素是指其值大于左右相邻值的元素。
// 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
// 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
// 你可以假设 nums[-1] = nums[n] = -∞。

// 暴力查找
var findPeakElement = function(nums) {
  if(nums.length == 1){
    return 0
  }
  for(let i = 1; i < nums.length; i++){
    if(i == nums.length - 1){
      if(nums[i] > nums[i - 1]) return i
    }else if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]){
      return i
    }
  }
  return false
}

// 二分法: 峰值总在较大的一侧存在
var findPeakElement = function(nums) {
  if(nums.length == 1){
    return 0
  }
  var left = 0
  var right = nums.length - 1
  while(left <= right){
    if(left == right) return left
    var middle = parseInt((left + right) / 2)
    if(nums[middle] < nums[middle + 1]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
}
console.log(findPeakElement([1,2,1]))
