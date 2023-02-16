/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let min = nums[0]
    
    for (let i = 0; i < nums.length; i++){
        let minIndex = i;
        for(let p = i + 1; p < nums.length; p++){
            if (min > nums[p]){
                minIndex = p
                min = nums[p]
            }
        }
        
        const tmp = nums[i]
        nums[i] = min;
        nums[minIndex] = tmp
        min = nums[i+1]
    }

};