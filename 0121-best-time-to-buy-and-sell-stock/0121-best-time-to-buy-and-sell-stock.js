/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyDaySoFar = 0
    let largestDiff = 0
    for (let i = 0; i < prices.length; i++){
        if (prices[buyDaySoFar] > prices[i] ){
            buyDaySoFar = i
        } else{
            largestDiff = Math.max(largestDiff, prices[i] - prices[buyDaySoFar])
        }
    }

    return largestDiff
};