// 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。
// 如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
// 使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。

// 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

var increasingTriplet = function(nums) {
   var first = second = Math.max(...nums) + 1
   if(nums.length < 3) return false
   for(var num of nums){
     if(num <= fist){
       first = num // 第一个数
     } else if(num <= second){
       second = num // 第二个数
     } else {
       return true // 如果该数比前两个数都大，说明符合情况，返回true
     }
   }
   return false
}
