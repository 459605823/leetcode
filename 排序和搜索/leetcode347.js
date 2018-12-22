// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

var topKFrequent = function(nums, k) {
    var obj = {}
    // 将数组中每个数字的出现频率与该数字记录在对象中
    for(var num of nums) {
      if(obj[num]){
        obj[num].count++
      } else {
        obj[num] = {num: num, count: 1}
      }
    }
    // 将对象中的值添加到一个数组中
    var arr = []
    for(var key in obj){
      arr.push(obj[key])
    }
    // 根据每个数字的出现频率对数组进行降序排列
    arr.sort((a, b) => {
      return b.count - a.count
    })
    // 此时数组的前K个元素就是出现频率前K高的元素，返回他们对应的数字
    return arr.slice(0, k).map(item => {
        return item.num
    })
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
