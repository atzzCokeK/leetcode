function intersection(nums1: number[], nums2: number[]): number[] {
    const setNums1 = new Set(nums1)
    const setNums2 = new Set(nums2)
    const ans = []

    for (const x of setNums1) {
        if (!setNums2.has(x)){
            continue
        }

        ans.push(x)
    }
    
    return ans
};