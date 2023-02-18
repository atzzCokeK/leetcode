function minMaxDifference(num: number): number {
    const numStr = num.toString()
    let maxTarget;
    let minTarget;
    for (let i = 0; i < numStr.length; i++){
        if (numStr.charAt(i) !== "9") {
            maxTarget = numStr.charAt(i)
            break;
        }
    }
    
    for (let i = 0; i < numStr.length; i++){
        if (numStr.charAt(i) !== "0") {
            minTarget = numStr.charAt(i)
            break;
        }
    }
    
    const max = [...numStr].map(num => {
        if (num === maxTarget) return "9"
        return num
    }).join("")
    
    const min = [...numStr].map(num => {
        if (num === minTarget) return "0"
        return num
    }).join("")
    
    return Number(max) - Number(min)

};