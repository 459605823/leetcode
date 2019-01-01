// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。
// [2,3,1,1,4]

var canJump = function(nums) {
   var lastIndex = nums.length - 1
   // 从后向前遍历，当当前元素能移动到上一个终点元素时，将终点元素移动至当前元素
   // 遍历结束后当终点元素位于数组开头时，说明可以到达最后一个位置
   for(var i = nums.length - 2; i >= 0; i--){
     if(i + nums[i] >= lastIndex){
       lastIndex = i
     }
   }
   return lastIndex === 0
}
