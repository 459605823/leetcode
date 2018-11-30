// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。
// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

var countAndSay = function(n) {
  if(n == 1) {
        return '1'
    }
    let lastNum = "1"
    for(let i=1; i<n; i++) {
        let nums = 0
        let curr = -1
        let addStr = ""

        for(let j=0; j<lastNum.length; j++) {
            let val = lastNum[j]
            if(val != curr) {
                if(nums > 0) {
                    addStr += (nums + curr)
                }
                nums = 1
                curr = val
            } else if(val == curr) {
                nums++
            }
        }

        lastNum = addStr + (nums + curr)
    }
    return lastNum
};
console.log(countAndSay(6))
