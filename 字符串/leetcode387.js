// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

var firstUniqChar = function(s) {
  let countObj = {};
  // for..of可以在原生字符串上迭代 
  for (let c of s) {// 遍历字符串，将每个字符作为键，该字符出现的次数作为值，储存在对象中
    if (countObj[c]) {
        countObj[c]++;
    } else {
        countObj[c] = 1;
    }
   }
   for(var i=0,len=s.length;i<len;i++){// 按照字符串的字符顺序查找第一个出现次数为一的字符
     if(countObj[s.charAt(i)] == 1){
       return i;
     }
   }
   return -1;
};
console.log(firstUniqChar("leetcode"));
