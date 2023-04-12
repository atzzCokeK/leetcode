type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accum = init;
    let i = 0;
    
    while(i < nums.length){
        accum = fn(accum, nums[i])
        i++
    }
   
    return accum
};