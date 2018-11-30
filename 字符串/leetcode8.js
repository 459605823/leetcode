// 字符串转换整数

// 96ms beat 81%
var myAtoi = function(str) {
    str = str.trim();
    if(str === "") {
      return 0;
    }
    var result = parseInt(str);
    if(isNaN(result)) {
      return 0;
    }
    var maxNumber = Math.pow(2,31) - 1;
    var minNumber = -(Math.pow(2,31));
    if(result > maxNumber){
      return maxNumber
    } else if (result < minNumber){
      return minNumber
    } else {
      return result;
    }
}
console.log(myAtoi("-91283472332"))
