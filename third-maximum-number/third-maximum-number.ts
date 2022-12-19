function thirdMax(nums: number[]): number {
    nums.sort((a,b) => {
        if (a > b){
            return -1
        } else {
            return 1
        }
    })
    
    const result = new Array()
    let resultP = 0
    
    for(let i = 0; resultP < 3 && i < nums.length;i++){
        if(result[resultP - 1] !== nums[i]){
            result.push(nums[i])
            resultP++
        }
    }
    console.log(result)
    
    
    return result[2] !== undefined ? result[2] : nums[0]
};