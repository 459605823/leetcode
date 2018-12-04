// 二分查找就是将查找的键和子数组的中间键作比较，
// 如果被查找的键小于中间键，就在左子数组继续查找；
// 如果大于中间键，就在右子数组中查找，否则中间键就是要找的元素。

// 二分查找的数组必须是顺序储存的有序数组

var binarySearch = function(array, value) {
  var left = 0
  var right = array.length - 1
  while(left <= right){
    var mid = parseInt((left + right + 1) / 2)
    if(array[mid] == value){
      return mid
    }
    // 如果该值大于数组中值，则在数组的右半部分查找
    else if(array[mid] < value){
      left = mid + 1
    }
    // 如果小于，则在左半部分查找
    else {
      right = mid - 1
    }
  }
  return -1
}

// 查找第一个与value相等的元素
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
console.log(findFirstEqual([0,0,1,1], 1))
