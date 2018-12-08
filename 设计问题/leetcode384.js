// 打乱一个没有重复元素的数组。

/**
 * @param {number[]} nums
 * 以数字集合初始化数组
 */
var Solution = function(nums) {
   this.nums = nums.slice()
};

/**
 * Resets the array to its original configuration and return it.
 * 重设数组到他的初始状态
 * @return {number[]}
 */
Solution.prototype.reset = function() {
   return this.nums
};

/**
 * Returns a random shuffling of the array.
 * 打乱数组并返回结果。任何数组的排列返回的概率应该相同。
 * @return {number[]}
 */
 // 随机打乱数组方法
Solution.prototype.shuffle1 = function() {
  let clone = this.nums.slice()
  return clone.sort(randomSort)
};
function randomSort(a, b){
  return Math.random() > .5 ? -1 : 1
}

Solution.prototype.shuffle2 = function() {
  let clone = this.nums.slice()
  for(var i=clone.length-1;i>=0;i--){
    // 随机索引值是从0-clone.length中随机抽取的（包括数组的最后一个元素）
    var randomIndex = Math.floor(Math.random() * (i+1))
    // 将抽取到的随机元素的当前元素位置互换
    var temp = clone[randomIndex]
    clone[randomIndex] = clone[i]
    clone[i] = temp
  }
  return clone
};
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
var s = new Solution([1,2,3])
console.log(s.shuffle())
console.log(s.reset())
console.log(s.shuffle())
console.log(s.reset())
console.log(s.shuffle())
console.log(s.reset())
console.log(s.shuffle())
console.log(s.reset())
