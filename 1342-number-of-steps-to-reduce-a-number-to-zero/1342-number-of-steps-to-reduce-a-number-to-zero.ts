function numberOfSteps(num: number): number {
    let remaining = num
    let count = 0
    while(remaining > 0){
        count++
        if (remaining % 2 === 0){
            remaining = remaining / 2
        } else{
            remaining = remaining - 1
        }
    }
    
    return count
};