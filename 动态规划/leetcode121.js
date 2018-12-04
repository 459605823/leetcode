// 买卖股票的最佳时机
// 最多完成一次交易
// 找到数组中两个元素的最大差值，第二个元素必须大于第一个元素

// 方法一 : 暴力循环 452ms
var maxProfit = function(prices) {
  var maxProfit = 0
  for(var i=0;i<prices.length-1;i++){
    for(var j=i+1;j<prices.length;j++){
      var profit = prices[j] - prices[i]
      if(profit > maxProfit) {
        maxProfit = profit
      }
    }
  }
  return maxProfit
}

// 方法二：一次遍历 72ms
var maxProfit = function(prices) {
  var min = prices[0]
  var maxProfit = 0
  for(var i=0;i<prices.length;i++){
    if(prices[i] < min){
      min = prices[i]
    } else if(prices[i] - min > maxProfit){
      maxProfit = prices[i] - min
    }
  }
  return maxProfit
}
