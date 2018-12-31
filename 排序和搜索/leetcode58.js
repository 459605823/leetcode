// 给出一个区间的集合，请合并所有重叠的区间
// [[1,3],[2,6],[8,10],[15,18]] ==> [[1,6],[8,10],[15,18]]
// [1,3]和[2,6]两个区间重叠

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

// 方法一：使用额外空间
var merge = function(intervals) {
  if(intervals.length == 0) return []
  intervals.sort(function(a, b){
    return a.start - b.start
  })
  var result = []
  for(var i = 0; i < intervals.length - 1; i++){
    if(intervals[i].end >= intervals[i + 1].start){
      // 将下一个元素改为合并后的区间，在下一次循环时将其添加到结果数组中
      intervals[i + 1].start = Math.min(intervals[i].start, intervals[i + 1].start)
      intervals[i + 1].end = Math.max(intervals[i].end, intervals[i + 1].end)
    } else {
      result.push(intervals[i])
    }
  }
  result.push(intervals[intervals.length - 1])
  return result
}

// 方法二：在原数组上进行操作
var merge = function(intervals) {
  if(intervals.length == 0) return []
  intervals.sort(function(a, b){
    return a.start - b.start
  })
  var i = 0
  for(var j = 1; j < intervals.length; j++){
    if(intervals[j].start <= intervals[i].end){
      intervals[i].end = Math.max(intervals[i].end, intervals[j].end)
    } else {
      // 从数组删去被合并的区间
      intervals[++i] = intervals[j]
    }
  }
  intervals.length = i + 1
  return intervals
}
