function removeElement(nums: number[], val: number): number {
    let left = 0

    while(left <= nums.length) {
        if(nums[nums.length - 1] === val) {
            nums.length--
            continue
        }

        if(nums[left] === val) {
            nums[left] = nums[nums.length - 1]
            nums.length--
        }

        left++
    }

    return left
};