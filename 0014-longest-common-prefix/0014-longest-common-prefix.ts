function longestCommonPrefix(strs: string[]): string {
    const prefixArr = []
    let last = strs[0].charAt(0)
    for (let i = 0; i < strs[0].length; i++){
        if (strs.every(target => target.charAt(i) === last)){
            prefixArr.push(last)
            last = strs[0].charAt(i+1)
            continue;
        }
        break;
    }
    
    return prefixArr.join("")
};