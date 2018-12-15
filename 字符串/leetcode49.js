// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// 方法一:排序数组分类：当且仅当它们的排序字符串相等时，两个字符串是字母异位词。
// obj:{string -> list} 每个键K是一个排序字符串，每个值是输入的字符串列表，排序后等于K
var groupAnagrams = function(strs) {
  if(strs.length == 0){
    return new Array(0)
  }
  var map = new Object()
  for(var c of strs){
    var key = c.split("").sort().join("")
    if(!map.hasOwnProperty(key)){
      map[key] = [c]
    } else {
      map[key].push(c)
    }
  }
  return Object.values(map)
}
// 使用map
var groupAnagrams2 = function(strs) {
  if(strs.length == 0){
    return new Array(0)
  }
  var map = new Map()
  for(var c of strs){
    var key = c.split("").sort().join("")
    if(!map.has(key)){
      map.set(key, [c])
    } else {
      map.get(key).push(c)
    }
  }
  var result = []
  for(var value of map.values()){
    result.push(value)
  }
  return result
}
console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]))
