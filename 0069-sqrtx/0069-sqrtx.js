/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2){
        return x;
    }
    
    let left = 1;
    let right = Math.floor(x / 2) + 1;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        
        if(square === x){
            return mid;
        } else if (square > x){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left - 1;
};