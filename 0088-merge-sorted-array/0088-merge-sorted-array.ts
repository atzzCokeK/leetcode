/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const copy = [...nums1]
    let p1 = 0
    let p2 = 0
    
    for (let p = 0; p < m + n; p++){
        if(p2 >= n || (p1 < m && copy[p1] < nums2[p2])){
            nums1[p] = copy[p1]
            p1++
        } else{
            nums1[p] = nums2[p2]
            p2++
        }
    }
};