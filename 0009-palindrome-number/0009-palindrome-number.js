/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false
    }
    const str = x.toString()

    let lp = 0
    let rp = str.length - 1
    while (lp <= rp){
        if (str.charAt(lp) !== str.charAt(rp)){
            return false
        }

        lp++
        rp--
    }

    return true
};