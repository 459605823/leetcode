// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
// 字母异位词：所含字母和个数相同，但顺序不同

var isAnagram = function(s, t) {
  if (s.length === 0 && t.length === 0){
    return true;
  }
  if (s.length === t.length) {
    let objS = {};// 记录s字符串中字母出现次数的对象
    for (let i of s) {// 遍历字符串，将每个字符作为键，该字符出现的次数作为值，储存在对象中
      if (objS[i]) {
          objS[i]++;
      } else {
          objS[i] = 1;
      }
    }
    let objT = {};// 记录t字符串中字母出现次数的对象
    for (let j of t) {
      if (objT[j]) {
        objT[j]++;
      } else {
        objT[j] = 1;
      }
    }
    var sKeys = Object.keys(objS);// 保存所有在s中出现过的字母
    var result = sKeys.every(value => {
      // every方法测试数组的所有元素是否都通过了指定函数的测试
      // callback需要返回每个元素判断的结果，让every决定什么时候返回结果
      // 如果发现使callback返回false的元素，every就会立即返回false，否则返回true
      // 箭头函数只有一个表达式时，省略{}，此时表达式前有一个隐含的return
      return objS[value] === objT[value];
    })
    return result;
  } else {
    return false;
  }
}
console.log(isAnagram("anagram", "nagaram"))
