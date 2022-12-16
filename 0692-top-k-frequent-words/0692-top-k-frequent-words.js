/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map()
    const result =[]
    for (let i = 0; i < words.length; i++){
        if (map.has(words[i])){
            map.set(words[i], map.get(words[i]) + 1)
        }else{
        map.set(words[i], 1)
        }
    }
    
    map.forEach((v,k,arr) => {
        result.push({value: v, key: k})
    })
    
    result.sort((a,b) => {
        if (a.value > b.value){
            return -1
        } else if (a.value < b.value) {
            return 1
        } else{
            if (a.key > b.key){
                return 1
            } else if(a.key < b.key){
                return -1
            }
        }
    })
    
   return result.map(obj => obj.key).slice(0,k)
};