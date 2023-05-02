function isPalindrome(s: string): boolean {
    const converted = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    let i = 0;
    let j = converted.length - 1;
    
    while(i <= j){
        if(converted.charAt(i) !== converted.charAt(j)){
            return false
        }
        
        i++
        j--
    }
    
    return true
};