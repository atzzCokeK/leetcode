/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    let result = true
    
    for (let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    
    const array = []  
    map.forEach((v,k) => {
        if (array.includes(v)){
            result = false
        }
        array.push(v)
    })
    
    return result 
};