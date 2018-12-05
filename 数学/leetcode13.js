// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
// 通常情况下，罗马数字中小的数字在大的数字的右边，但存在特例
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

// 方法一:从左至右遍历字符串，如果当前字符对应的值小于下一个字符对应的值，就减去该值，否则就加上该值
var romanToInt1 = function(s) {
   var obj = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
   var result = 0
   for(var i=0;i<s.length;i++){
     // 如果当当前字符对应的值小于下一个字符的值，并且该字符不是最后一个字符时，减去该值
     if(obj[s[i]] < obj[s[i+1]] && i < s.length - 1){
       result -= obj[s[i]]
     } else{
     // 如果当前字符对应的值大于下一个字符的值，或者该字符为最后一个字符时，加上该值
       result += obj[s[i]]
     }
   }
   return result
};

// 方法二: 列出所有情况
var romanToInt2 = function (s) {
    let num = 0
    // 按正常顺序此数为6，此时为4，所以减2
    if (s.includes("IV")) num -= 2
    // 按正常顺序此数为11，此时为9，所以减2
    if (s.includes("IX")) num -= 2
    // 按正常顺序此数为60，此时为40，所以减20
    if (s.includes("XL")) num -= 20
    // 按正常顺序此数为110，此时为90，所以减20
    if (s.includes("XC")) num -= 20
    // 按正常顺序此数为600，此时为400，所以减200
    if (s.includes("CD")) num -= 200
    // 按正常顺序此数为1100，此时为900，所以减200
    if (s.includes("CM")) num -= 200
    // 判断之后即可忽略字符顺序直接相加
    for (let c of s) {
        switch (c) {
            case "I":
                num += 1
                break
            case "V":
                num += 5
                break
            case "X":
                num += 10
                break
            case "L":
                num += 50
                break
            case "C":
                num += 100
                break
            case "D":
                num += 500
                break
            case "M":
                num += 1000
                break
        }
    }
    return num
}
console.log(romanToInt1("III"))
