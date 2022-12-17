function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    
    while (left <= right){
        let mid = Math.ceil((left + right) / 2)
        if (target > nums[mid]){
            left = mid + 1
        } else if (target < nums[mid]){
            right = mid - 1
        } else {
            return mid
        }
    }
    
    return -1
};