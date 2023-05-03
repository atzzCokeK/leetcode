function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    
    const sArr = [...s].sort()
    const tArr = [...t].sort()
    
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] !== tArr[i]) return false
    }
    
    return true
};