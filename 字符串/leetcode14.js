// 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
//  ["flower","flow","flight"] ==> "fl"

// 80ms beat 67%
var longestCommonPrefix = function(strs) {
  // 如果这个数组为空数组，返回空字符串
  if(strs.length === 0){
    return "";
  }
  // 找出数组中长度最短的字符串
   var theShortestOne = strs[0];
   var theShortestIndex = 0;
   for(var i=1,len=strs.length;i<len;i++){
      if(strs[i].length < theShortestOne.length){
        theShortestOne = strs[i]
        theShortestIndex = i;
      }
   }
   // 从数组中删去这个元素
   strs.splice(theShortestIndex,1)
   var result = "";
   // 遍历这个字符串的每个字母，判断数组中每个元素的响应位置的字母是否与其相等
   for(var j=0,len=theShortestOne.length;j<len;j++){
     if(strs.every(element => element[j] === theShortestOne[j])){
       result += theShortestOne[j]
     } else {
       return result;
     }
   }
   return result;
};

console.log(longestCommonPrefix([]))
