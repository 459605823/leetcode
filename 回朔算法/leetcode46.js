// 给定一个没有重复数字的序列，返回其所有可能的全排列。

var permute = function(nums) {
   if(nums.length == 1) return [nums]
   var result = []
   for(var i = 0; i < nums.length; i++){
     // 除去当前数字的剩余数组
     var restArr = nums.slice(0,i).concat(nums.slice(i+1))
     // 求剩余数组的全排列
     var restPermute = permute(restArr)
     for(item of restPermute){
       // 将当前数字插入到剩余数组的全排列结果数组的首位
       item.unshift(nums[i])
       result.push(item)
     }
   }
   return result
}
console.log(permute([1,2,3]))
