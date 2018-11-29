// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

//去除字符串中的所有空格str = str.replace(/\s*/g,""); \s匹配任意的空白符
//去除字符串中的所有标点符号str=str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
var isPalindrome = function(s) {
  s = s.replace(/\s*/g,"").toLowerCase();//去除字符串内的空格并全部变为小写
  // 去除字符串中的所有标点符号
  s = s.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
  var arr = s.split("");
  var reverseArr = arr.reverse();
  var reverseS = reverseArr.join("");
  if(s === reverseS){
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))
