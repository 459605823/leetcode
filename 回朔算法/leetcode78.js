// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

// 集合中每添加一个元素，则子集数目增加一倍，且增加的子集为所有原始子集加上新的元素。
// nums = [1,2,3]
// 1. 初始时集合为空，子集为[ [] ]。
// 2. 添加一个元素1,即集合为[1]时，子集为空集和空集+元素1，
// 即[ [], [1] ]。
// 3. 添加下一个元素2，集合为[1,2]，子集除了包含上一步的所有集合还新增了对应集合+元素2的所有集合，
// 即[ [], [1], [2], [1,2]]，其中[2]是空集+元素2，[1,2]是[1]+元素2。
// 4. 添加下一个元素3，集合为[1,2,3]，类似的得到子集为[ [], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3] ]，
// 其中[3]是空集+元素3，[1,3]是[1]+元素3，[2,3]是[2]+元素3，[1,2,3]是[1,2]+元素3。

// 方法一:遍历数组，遇到一个数就把之前的子集加上该数组成新的子集，遍历结束即为所有子集
var subsets = function(nums) {
  // 初始子集为[[]]
    var result = [[]]
    for(var num of nums){
        var temp = []
        // 遍历之前的子集，将所有子集加上该数
        for(var before of result){
            temp.push(before.concat(num))
        }
        console.log(temp)
        // 更新子集：加上该数组成的子集
        result = result.concat(temp)
        console.log(result)
    }
    return result
}

// 方法二:回溯算法
var subsets2 = function (nums) {
    let list = []
    nums.sort()
    backtrack(list, new Array(), nums, 0);
    return list
}

function backtrack(list, tempList, nums, start) {
    list.push(tempList.slice());
    for (let i = start; i < nums.length; i++) {
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.pop()
    }
}
console.log(subsets2([1,2,3]))
