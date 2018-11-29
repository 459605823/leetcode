// 将当前数组组成的多位数加一，返回加后的数组

var plusOne = function(digits) {
  var lastNineIndex = digits.length - 1; // 从个位位置开始判断该位置数字是否为9
  while (lastNineIndex >= 0) { // 从个位开始向最高位逐步判断
   if(digits[lastNineIndex] != 9){ // 如果当前位的数字不为9，加一后直接返回数组
     digits[lastNineIndex] += 1;
     return digits;
   } else { // 否则加一后将当前位的数字设为0，同时位数向前进一
     digits[lastNineIndex] = 0;
     lastNineIndex--;
   }
  }
  if(lastNineIndex == -1){ // 如果此时lastNineIndex为-1，说明之前最高位的数字为9，此时最高位的数字应该为1
    digits.unshift(1);
  }
  return digits;
}

console.log(plusOne([1,2,9,9]))
