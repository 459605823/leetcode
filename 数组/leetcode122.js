// 计算所能获取的最大利润
// 逐步递增之和与峰值和谷值之差相等

var maxProfit = function(prices) {
  var maxprofit = 0;
  for(let i=1;i<prices.length;i++){
    if(prices[i] > prices[i-1]) {
      maxprofit += prices[i] - prices[i-1];
    }
  }
  return maxprofit;
}
console.log(maxProfit([1,2,3,4,5]))
