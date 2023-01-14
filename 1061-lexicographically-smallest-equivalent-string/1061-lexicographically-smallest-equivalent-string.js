/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const map = new Map()
    for(let i = 0; i < s1.length; i++){
        if(map.has(s1.charAt(i)) || map.has(s2.charAt(i))){
            const next1 = map.get(s1.charAt(i)) || []
            const next2= map.get(s2.charAt(i)) || []
            const merged = new Set(next1.concat([...next2,s1.charAt(i),s2.charAt(i)]))
            const uniqueArr = []
            merged.forEach((value) => {
                uniqueArr.push(value)
            })

            merged.forEach((value) => {
                map.set(value,uniqueArr)
            })

        } else {
            map.set(s1.charAt(i), [s2.charAt(i)])
            map.set(s2.charAt(i), [s1.charAt(i)])
        }
    }
    
    let result = ""
    for(let i = 0; i < baseStr.length; i++){
        if (!map.has(baseStr.charAt(i))){
            result += baseStr.charAt(i);
            continue;
        }
        
        result += map.get(baseStr.charAt(i)).concat([baseStr.charAt(i)]).sort()[0]
    }
    
    return result
};