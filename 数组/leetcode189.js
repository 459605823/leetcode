// 旋转数组：将给定的数组向右旋转k位
// 向右旋转一位就是最高位的元素放在第零位，其他元素把自身位置提高一位：【1，2,3】==》【3,1,2】

// 方法一: 根据右移位数进行循环，每次循环将最高位数字放在第零位，其他位数字提高一位
var rotate1 = function(nums, k) {
  var length = nums.length;
  while(k > 0) {
    var t = nums[length - 1];//获取最高位的数字
    for(var i=length-2;i>=0;i--){//从倒数第二个数字开始，其他每个数字位置都抬高一位
      nums[i+1] = nums[i];
    }
    nums[0] = t;//其他数字提高后，将第零位设为最高位的元素
    k--;//完成一次循环
  }
  return nums;
}

// 方法二：元素位置向右旋转后如果大于数组长度，则要从0开始计算
// 利用取余即可计算当前元素旋转后在新数组中的位置
var rotate2 = function(nums, k) {
  var length = nums.length;
  var result = new Array(length);
  for(var i=0;i<length;i++){
    result[(i+k)%length] = nums[i];
  }
  return result;
}

// 方法三：三次倒置
// 数组元素右移k个位置的结果是，原来在 
// 后面的k个元素跑到了数组前面，原来在前面的length-k 
// 个元素，跑到了数组的后面，并且前后两部分元素各自的顺序和 
// 移动前一致，而倒置整个数组元素就是让后面k个元素跑到前面去， 
// 让前面length-k个元素跑到后面去，但是倒置之后前后两部分 
// 元素的顺序跟移动之前不一样了，倒置了，所以要把两部分的元素倒置回来 
var rotate3 = function(nums, k) {
  nums = nums.reverse();// 倒置整个数组
  var beginArr = nums.slice(0,k);// 获取前k个元素
  var endArr = nums.slice(k);// 获取移动到后面的元素
  var reverseBeginArr = beginArr.reverse();// 倒置前k个元素
  var reverseEndArr = endArr.reverse();// 倒置移动到后面的元素
  var nums = reverseBeginArr.concat(reverseEndArr);// 连接顺序调整正确后的元素
  return nums;
}

console.log(rotate3([1,2,3,4,5], 3));
