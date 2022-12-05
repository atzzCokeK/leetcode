function removeElement(nums: number[], val: number): number {
    let count = 0
    const copy = [...nums]
    for(let p = 0; p < copy.length; p++){
        if(copy[p] === val){
            nums.splice(p - count,1)
            count ++
        }
    }
    
    return copy.length - count 
};