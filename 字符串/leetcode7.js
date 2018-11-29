// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 120 >> 21

// 方法一 100ms beat 75.53%
var reverseNumber = function (x) {
  var arr = x.toString().split('');
  var reverseArr = arr.reverse();
  if(reverseArr[reverseArr.length-1] == "-"){
    var negativeSign = reverseArr.pop();
    reverseArr.unshift(negativeSign);
    var negetiveResult = parseInt(reverseArr.join(""));
    if(negetiveResult < -(Math.pow(2,31))){
      return 0;
    } else {
      return negetiveResult;
    }
  } else {
    var result =  parseInt(reverseArr.join(""));
    if(result > (Math.pow(2,31) - 1)){
      return 0;
    } else {
      return result;
    }
  }
}

console.log(reverseNumber(-123));
