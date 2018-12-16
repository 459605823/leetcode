// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 暴力法:超出时间限制
var longestPalindrome = function(s) {
  var result = s.charAt(0)
  // 找出所有可能的字符串并验证他是不是回文
  for(var i=0;i<s.length;i++){
    for(var j=i+1;j<s.length;j++){
      var temp = s.slice(i,j+1)
      if(isPalindrome(temp)){
        result = temp.length > result.length ? temp : result
      }
    }
  }
  return result
}
var isPalindrome = function(s) {
  var arr = s.split("");
  var reverseArr = arr.reverse();
  var reverseS = reverseArr.join("");
  if(s === reverseS){
    return true;
  } else {
    return false;
  }
}

// 中心扩展算法
// 遍历字符串的每一个字符，如果存在回文子串，那么中心是某一个字符（奇数）或两个字符的空隙（偶数），
// 然后分两种情况（奇数或偶数）向两边扩展
// 因为回文字符串是以中心轴对称的，所以如果我们从下标 i 出发，用2个指针向 i 的两边扩展判断是否相等，
// 那么只需要对0到len-1的下标都做此操作，就可以求出最长的回文子串。
var longestPalindrome = function(s) {
    if(s == null || s.length < 1) return '';
    let start = 0, end = 0;
    for(let i = 0; i < s.length; i++) {
        // 以该字母为中心、中心一个字母时的最长回文子串长度
        let len1 = expandAroundCenter(s, i, i);
        // 以该字母及其相邻字母为中心、中心两个字母时的最长回文子串长度
        let len2 = expandAroundCenter(s, i, i+1);
        let len  = Math.max(len1, len2);
        if(len > end - start) {
          // 如果该回文子串更长，则将两指针向该子串的开头结尾移动
          // i为该子串的中心位置 减去长度一半为开头位置
            start = i - parseInt((len - 1) / 2);
          // 加上长度一半为结尾位置
            end = i + parseInt(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

function expandAroundCenter(s, left, right) {
    let l = left, r = right;
    // 从中心位置开始向0和length-1的下标扩展，如果两端字符相等，则继续向两端扩展
    while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
        l--;
        r++;
    }
    return r - l - 1;
}
console.log(longestPalindrome("ababb"))
