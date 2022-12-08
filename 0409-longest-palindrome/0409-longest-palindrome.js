/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return 1
    }

    let map = new Map()
    let result = 0

    for (let i = 0; i < s.length; i++){
        if(map.has(s.charAt(i))){
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
        } else {
            map.set(s.charAt(i),1)
        }
    }

    map.forEach((v,k) => {
        if (v > 1){
          result += (Math.floor(v / 2) * 2)
        }
    })

    return result < s.length ? result + 1 : result
};