// 两数之和：在数组中找出和为目标值的两个整数

// 暴力方法：遍历数组的每一个元素，寻找等于target-nums[i]的元素
// 如果存在，则加入结果数组中
var twoSum = function(nums, target) {
  var result = [];
  for(var i=0;i<nums.length;i++){
    for(var j=i+1;j<nums.length;j++){
      if(nums[j] == target-nums[i]){
        result.push([i,j]);
      }
    }
  }
  if(result.length > 0) {
    return result;
  } else {
    return "No two sum solution";
  }
}
console.log(twoSum([1,2,3,4,5], 3))
