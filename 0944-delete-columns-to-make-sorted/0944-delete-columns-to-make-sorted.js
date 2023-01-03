/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const length = strs[0].length
    let count = 0

    isValidOrder = (chars) => {
        const original = [...chars]
        chars.sort((a,b) => {
            if (a > b){
                return 1
            } else {
                return -1
            }
        }
        )
        return original.toString() === chars.toString()
    } 
    let charIndex = 0

    while(charIndex < length){
        const mapped = strs.map(str => str.charAt(charIndex))
        if (!isValidOrder(mapped)){
            count++
        }
        charIndex++
    }

    return count
};