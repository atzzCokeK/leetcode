/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const chars = [...s];
    const map = new Map();
    let noDuplicate = -1;
    let index;
    
    for(let i = 0; i < chars.length; i++){
        if(map.has(chars[i])){
            map.set(chars[i],{index:i, isDuplicated: true})
        } else{
            map.set(chars[i],{index:i, isDuplicated: false})
        }
    }
    
    
    map.forEach((value,key) => {
        if(value.isDuplicated){
            return
        }
        
        if (index === undefined){
            index = value.index
        }
        
        index = Math.min(index,value.index)
    })
    
    return index ?? noDuplicate
};