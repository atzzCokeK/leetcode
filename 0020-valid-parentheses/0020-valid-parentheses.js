/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0 || s.length % 2 === 1){
        return false
    }
    
    const map = new Map()
    map.set("}","{")
    map.set("]","[")
    map.set(")","(")
    
    const openings = ["[","{","("]
    
    const stack = []
    
    for (let i = 0; i < s.length; i++){
        if(openings.includes(s.charAt(i))){
            stack.push(s.charAt(i))
            continue;
        }
        
        if(stack.pop() !== map.get(s.charAt(i))){
            return false
        }
    }
    
    return stack.length === 0
};