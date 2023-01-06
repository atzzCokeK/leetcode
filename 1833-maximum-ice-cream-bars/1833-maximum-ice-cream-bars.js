/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => {
        if (a > b){
            return 1
        } else{
            return -1
        }
    })
    let count = 0
    for(let i = 0; i < costs.length && coins >= 0; i++){
        if (costs[i] > coins){
            return count
        }
        
        coins -= costs[i] 
        count++
    }
    
    return coins > 0 ? count : count - 1
};