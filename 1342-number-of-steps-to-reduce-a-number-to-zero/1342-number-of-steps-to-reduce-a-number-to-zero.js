/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let remaining = num
    let count = 0
    while(remaining > 0){
        count++
        if (remaining % 2 === 0){
            remaining = remaining / 2
        } else{
            remaining = remaining - 1
        }
    }
    
    return count
};
