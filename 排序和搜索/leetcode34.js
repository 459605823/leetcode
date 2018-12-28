// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 你的算法时间复杂度必须是 O(log n) 级别。
// 如果数组中不存在目标值，返回 [-1, -1]。

// 二分法
var searchRange = function(nums, target) {
  // 通过二分查找找到一个目标元素的位置
  var targetIndex = binarySearch(nums, target, 0, nums.length - 1)
  if(targetIndex == -1) return [-1, -1]
  var l = r = targetIndex
  // 定义两个指针表示目标的数组中的开始和结束位置
  // 在保持与目标值相等的情况下，分别将两个指针向数组开头和结尾移动
  while(l > 0 && nums[l - 1] == target) {
    l--
  }
  while(r < nums.length - 1 && nums[r + 1] == target) {
    r++
  }
  return [l, r]
}
var binarySearch = function(array, value, left, right) {
  while(left <= right){
    var mid = parseInt((left + right + 1) / 2)
    if(array[mid] == value){
      return mid
    }
    else if(array[mid] < value){
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }
  return -1
}

// 两次循环 O(N)
var searchRange = function(nums, target) {
  var left = right = -1
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === target){
      left = i
      break
    }
  }
  for(var j = nums.length - 1; j >= 0; j--){
    if(nums[j] === target){
      right = j
      break
    }
  }
  return [left, right]
}

// 两次循环改进为一次循环
var searchRange = function(nums, target) {
  var result = []
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === target){
      result.push(i)
    }
  }
  // result[0]表示开始位置，result[result.length - 1]表示结束位置
  return result.length > 0 ? [result[0], result[result.length - 1]] : [-1, -1]
}

// 使用库函数
var searchRange = function(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)]
}

console.log(searchRange([5,7,7,8,8,10], 8))
