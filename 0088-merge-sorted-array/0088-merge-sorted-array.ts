/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i = 0; i < n; i ++){
        nums1[i+m] = nums2[i]
    }
    
    nums1.sort((a,b) => {if(a > b){
        return 1
    }else {
        return -1
    }})
};