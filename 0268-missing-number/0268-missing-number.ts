function missingNumber(nums: number[]): number {
    const sorted = nums.sort((a,b) => {
        if (a < b){
            return -1
        } else{
            return 1
        }
    })
    const length = nums.length
    
    console.log(sorted)
    for(let i = 0; i < length; i++){
        if(i !== sorted[i]){
            return i
        }
    }

    return length
};