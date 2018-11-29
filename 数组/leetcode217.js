// 判断是否存在重复元素

//方法一 :让数组中每个元素比较，速度慢
// 1261ms
var containsDuplicate1 = function(nums) {
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i] === nums[j]){
        return true;
      }
    }
  }
  return false;
};

//方法二： 先对数组进行排序，这样相同的元素一定是挨着的，只需要对相邻元素进行判断即可
// 132ms
var containsDuplicate2 = function(nums) {
  if(nums.length <= 1){
    return false;
  }
  nums = nums.sort();
  for(var i=0;i<nums.length-1;i++){
    if(nums[i] === nums[i+1]){
      return true;
    }
  }
  return false;
}


console.log(containsDuplicate2([1,2,3]));
