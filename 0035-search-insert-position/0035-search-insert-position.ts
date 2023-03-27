function searchInsert(nums: number[], target: number): number {
    let p = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right){
        p = left + Math.floor((right - left) / 2);
        if(nums[p] === target) return p;
        if(target < nums[p]) {
            right = p - 1;
            continue;
        }
        left = p + 1;
    }
    
    return left
};