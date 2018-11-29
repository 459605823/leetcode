// 将输入的字符串反转过来

// 116ms
var reverseString = function (s) {
  var arr = s.split("");// 将原始字符串分隔后组成数组
  var reverseArr = arr.reverse();// 数组反转
  var result = reverseArr.join("");// 将数组拼接为字符串
  return result;
}
console.log(reverseString("A man, a plan, a canal: Panama"));
