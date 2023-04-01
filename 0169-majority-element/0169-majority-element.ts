function majorityElement(nums: number[]): number {
    const map = new Map()
    
    for(const num of nums){
        if (map.has(num)){
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    
    let element;
    
    map.forEach((value,key) => {
        if (value > nums.length / 2){
            element = key
        }
    })
    
    return element
};