// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 1.将数组排序 2.定义三个指针，i，j，k。遍历i，
// 那么这个问题就可以转化为在i之后的数组中寻找nums[j]+nums[k]=-nums[i]这个问题，
// 也就将三数之和问题转变为二数之和---（可以使用双指针）
var threeSum = function(nums) {
  // 数组排序
   nums.sort(function(a, b){
     return a - b
   })
   let result = []
   for(var i = 0; i < nums.length; i++){
     // 如果当前值与上一个数值相等，则直接进行下一次循环
     if(i > 0 && nums[i] == nums[i - 1]){
       continue
     }
     // 其实为在i指针之后的数组寻找值为Nums[i]的两数之和问题
     let j = i + 1, k = nums.length - 1
     let target = -nums[i]
     while(j < k){
       if(nums[j] + nums[k] == target){
         result.push([nums[i], nums[j], nums[k]])
         j++
         k--
         // 遇到重复值时直接移动指针
         while(j < k && nums[j] == nums[j-1]) j++
         while(j < k && nums[k] == nums[k+1]) k--
       } else if(nums[j] + nums[k] > target){
         k--
       } else {
         j++
       }
     }
   }
   return result
}
