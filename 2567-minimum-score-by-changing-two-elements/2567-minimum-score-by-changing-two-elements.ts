function minimizeSum(nums: number[]): number {
    const length = nums.length
    if (length < 3) return 0

    nums.sort((a,b) => a - b)
    const ptn1 = nums[length - 1] - nums[2] 
    const ptn2 = nums[length - 3] - nums[0] 
    const ptn3 = nums[length - 2] - nums[1] 

    return Math.min(ptn1,ptn2,ptn3)
};