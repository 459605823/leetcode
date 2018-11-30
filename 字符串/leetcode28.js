//实现strStr函数:在一个字符串中找出另一个字符串出现的第一个位置

var strStr = function(haystack, needle) {
   if(needle === ""){
     return 0;
   } else {
     return haystack.indexOf(needle);
   }
};
