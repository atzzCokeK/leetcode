function isHappy(n: number): boolean {
    const set = new Set()
    
    while (n !== 1){
        let sum = 0;
        while (n > 0){
            const digit = n % 10
            sum += digit * digit
            n = Math.floor(n / 10)
        }
        
        if(set.has(sum)) return false
        
        set.add(sum)
        n = sum
    }
    
    return true
};