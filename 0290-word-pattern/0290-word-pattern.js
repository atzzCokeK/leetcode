/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const converted = s.split(" ")
    const wordMap = new Map()
    const ptrnMap = new Map()
    if (pattern.length !== converted.length){
        return false
    }

    for(let i = 0; i < converted.length; i++){
        if (wordMap.has(converted[i])){
            if(wordMap.get(converted[i]) !== pattern.charAt(i)){
                return false
            }
        } else if (ptrnMap.has(pattern.charAt(i))) {
            if(ptrnMap.get(pattern.charAt(i)) !== converted[i]){
                return false
            }
        }

        wordMap.set(converted[i],pattern.charAt(i));
        ptrnMap.set(pattern.charAt(i),converted[i]);
    }

    return true
};