// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 注意:不能使用代码库中的排序函数来解决这道题。

// 方法一:两次循环
var sortColors = function(nums) {
   var zeroCount = oneCount = twoCount = 0
   var len = nums.length
   // 迭代计算0、1、2元素的数量
   for(var i = 0; i < len; i++){
     switch (nums[i]) {
       case 0:
         zeroCount++
         break
       case 1:
         oneCount++
         break
       case 2:
         twoCount++
         break
     }
   }
  // 按照0、1、2的顺寻和相应元素的数量重写数组
  for(var j = 0; j < len; j++){
    if(j < zeroCount){
      nums[j] = 0
    } else if(j < zeroCount + oneCount){
      nums[j] = 1
    } else {
      nums[j] = 2
    }
  }
  console.log(nums)
}

// 方法二:一次循环（其实循环了很多次）
var sortColors = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    var val = nums[i]
    if(nums[i] > nums[i + 1]){
        nums.splice(i, 1)
        // 每次从头开始
        i = 0
        nums.push(val)
        console.log(nums)
    }
  }
  console.log(nums)
}


sortColors([2,0,2,1,1,0])
