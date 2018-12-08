// 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
// 说明:
// 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

var missingNumber = function(nums) {
  var compareArr = new Array(0)
  for(var i=0;i<=nums.length;i++){
    compareArr.push(i)
  }
  for(var c of compareArr){
    if(nums.indexOf(c) == -1){
      return c
    }
  }
}
console.log(missingNumber([3,0,1]))
