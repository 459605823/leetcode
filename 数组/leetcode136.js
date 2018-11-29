// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// ^异或运算符
// 离散数学异或运算性质
// 交换律：a^b^c <=> a^c^b
// 任何数于0异或为任何数：0^n = n
// 相同的数异或为0: n^n = 0
// 2^3^2^4^4 = 2^2^4^4^3 = 0^0^3 = 3
var singleNumber = function(nums) {
  return nums.reduce(function(pre,cur){
     return pre ^ cur;
  })
};

console.log(singleNumber([1,2,2]));
