// 将数组中所有的0元素移动到数组末尾，并保持非零元素的相对顺序

// 方法一 88ms beat 72%
var moveZeros = function (nums) {
  var zeroCount = 0;
  // 获取数组0元素的个数
  for(var i=0,len=nums.length;i<len;i++){
    if(nums[i] == 0){
      zeroCount++;
    }
}
// 根据0元素的个数，从数组中删去0元素，并将其添加到数组末尾
  for(var j=0;j<zeroCount;j++){
    var zeroIndex = nums.indexOf(0);
    nums.splice(zeroIndex,1);
    nums.push(0);
  }
   return nums;
}

// 方法二 96ms beat 58%
var moveZeros2 = function (nums) {
  var temp;
  var index = 0;
  for(var i=0,len=nums.length;i<len;i++){
    // 将非0元素的位置向前移动
    if(nums[i] != 0){
      temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      // 如果该元素为0元素，index值不变，此时index即表示0元素的位置
      index++;
    }
  }
  return nums;
}
console.log(moveZeros2([0,0,1]))
