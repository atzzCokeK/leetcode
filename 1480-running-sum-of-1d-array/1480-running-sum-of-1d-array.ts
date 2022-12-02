function runningSum(nums: number[]): number[] {
    const list = new Array(nums.length)
    list[0] = nums[0]
    for (let i = 1; i < nums.length; i++ ){
        list[i] = nums[i] + list[i-1]
    }
    
    return list
};