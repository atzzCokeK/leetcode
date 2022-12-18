/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let writeP = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[writeP] = nums[i]
            writeP++
        }
    }

    while(writeP < nums.length){
        nums[writeP] = 0
        writeP++
    }
};