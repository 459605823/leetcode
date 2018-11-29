// 原地修改数组：采用不复制的方式

var removeDuplicates = function(nums) {
  if(nums.length == 0) {
      return 0;
  }
  // number为慢指针，i为快指针
  // 遇到重复项时跳过，不重复时设置新值
   var number = 0;
   for(var i=0;i<nums.length;i++){
       if(nums[number] != nums[i]){
          number++;
          nums[number] = nums[i];
     }
   }
   // 加上第一项
   return (number+1);
};
console.log(removeDuplicates([1,1,2]));
