/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const capitals = [ "A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const wordArr = [...word]
    
    if (wordArr.every(c => capitals.includes(c))){
        return true
    }

    if(!capitals.includes(wordArr[0]) && wordArr.every((c) => !capitals.includes(c))){
        return true
    }

    if(capitals.includes(wordArr[0])){
        return wordArr.every((c,i) => {
            if (i === 0){
                return true
            } else {
                return !capitals.includes(c)
            }
        })
    }

    return false
};