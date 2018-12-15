// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。


// 方法一:一次循环：由于只使用一次循环，所以存放无重复子串的str在遇到重复值时要删去第一个重复元素，再加上后面的元素
// 相当于双指针法将头部指针向后移动一步
var lengthOfLongestSubstring = function(s) {
    var res = 0; // 用于存放当前最长无重复子串的长度
    var str = ""; // 用于存放无重复子串
    var len = s.length;
    for(var i = 0; i < len; i++) {
      var char = s.charAt(i);
      var index = str.indexOf(char);
      if(index === -1) {
        str += char;
        res = res < str.length ? str.length : res;
      } else {
        // 从无重复子串中删去第一个重复元素
        str = str.substr(index + 1) + char;
      }
    }
    return res;
}

// 方法二:双指针法
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length
  }
  var start = 0
  var end = 1
  var max = end - start
  while (end <= s.length - 1) {
    var idx = s.indexOf(s[end], start)
    // 当遇到重复元素时移动头指针，从下一个不重复元素开始
    if (idx !== end) {
      start = idx + 1
      continue
    }
    // 不重复时则向后移动尾指针
    end++
    max = end - start > max ? end - start : max
  }
  return max
}
