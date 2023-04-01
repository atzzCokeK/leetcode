function singleNumber(nums: number[]): number {
    const count = {};
    for (let i = 0; i < nums.length; i++){
        count[nums[i]] = count[nums[i]] ? 2 : 1;
    }
    
    for(const [key, value] of Object.entries(count)){
        if(value === 1){
            return Number(key)
        }
    }
};