// 给定两个数组，编写一个函数来计算它们的交集。

var intersect = function(nums1, nums2) {
  const result = [];
  for(let i=0;i<nums1.length;i++){
       let num1 = nums1[i];
       // 获取第一个匹配项的索引
       let match = nums2.indexOf(num1);
       // 如果匹配到，则将该值添加到结果数组中，并将该匹配值从Nums2中删除
       // 每次删除匹配项，这样结果数组中相交元素的数量就为在两个数组中出现的最小次数
       if(match != -1){
         result.push(num1);
         nums2.splice(match,1);
       }
  }
  return result
};
console.log(intersect([1,2,2,1],[2]));
