function findDisappearedNumbers(nums: number[]): number[] {
    const map = new Map()
    const result = []
    for (let i = 0; i < nums.length; i++ ){
        map.set(nums[i],0)
    }
    
    for(let i = 1; i <= nums.length; i++){
        if(!map.has(i)){
            result.push(i)
        }
    }
    
    return result
    
};