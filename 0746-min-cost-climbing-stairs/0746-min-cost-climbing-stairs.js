/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const minimumCost = new Array(cost.length + 1)
    minimumCost[0] = 0
    minimumCost[1] = 0
    
    for (let i = 2; i < minimumCost.length; i++){
        const oneStep = minimumCost[i - 1] + cost[i - 1];
        const twoStep = minimumCost[i - 2] + cost[i - 2];
        minimumCost[i] = Math.min(oneStep,twoStep);
    }
    console.log(minimumCost)

    return minimumCost[minimumCost.length - 1]
};