/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const limit = m + n
    nums1.push(...nums2) 
    nums1.sort((a,b) => {
        if (a > b){
            return 1
        } else{
            return -1
        }
    })
    while(nums1.indexOf(0) !== -1 && nums1.length > limit){
    nums1.splice(nums1.indexOf(0),1)
}

};