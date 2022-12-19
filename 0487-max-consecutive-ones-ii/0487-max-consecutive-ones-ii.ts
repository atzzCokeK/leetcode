function findMaxConsecutiveOnes(nums: number[]): number {
    let longestOnes = 0
    let lp = 0
    let rp = 0
    let numZeros = 0
    
    while(rp < nums.length){
        if(nums[rp] === 0){
            numZeros++
        }
        
        while(numZeros === 2){
            if(nums[lp] === 0){
                numZeros--
            }
            
            lp++
        }
        
        longestOnes = Math.max(longestOnes, rp - lp + 1)
        rp++
    }
    return longestOnes


};