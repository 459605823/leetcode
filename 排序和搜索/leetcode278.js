// 第一个错误的版本
// 相当于从数组[0,0,0,1,1,1]中查找第一个数值为1的元素

// 二分查找
var findFirstEqual = function(array, value) {
  var left = 0
  var right = array.length - 1
  while(left <= right) {
    var mid = parseInt((left + right + 1) / 2)
    if(array[mid] >= value){
      right = mid - 1
    }else {
      left = mid + 1
    }
  }
  if(left < array.length && array[left] == value){
    return left
  }
  return -1
}

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
       if(isBadVersion(1)) return 1
       var left = 1
       var right = n
       while (left < right){
         var mid = parseInt(left/2) + parseInt(right/2)
         if(isBadVersion(mid)) {
            right = mid
         } else {
             left = mid + 1
         }

       }
       return left
    };
};
