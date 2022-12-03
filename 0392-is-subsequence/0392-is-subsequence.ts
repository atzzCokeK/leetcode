function isSubsequence(s: string, t: string): boolean {
    const srcLength = s.length
    const trgLength = t.length
    let pLeft = 0
    let pRight = 0
    while(pLeft < srcLength && pRight < trgLength){
        if(s.charAt(pLeft) === t.charAt(pRight)){
            pLeft++
        }
        
        pRight++
    }
    
    return pLeft === srcLength
};