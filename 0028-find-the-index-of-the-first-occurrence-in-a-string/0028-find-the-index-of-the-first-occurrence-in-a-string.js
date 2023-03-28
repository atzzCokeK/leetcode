/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      if (needle === '') {
        return 0;
    }

    const needleLength = needle.length;
    const haystackLength = haystack.length;

    if (haystackLength < needleLength) {
        return -1;
    }

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let j;
        for (j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }

        if (j === needleLength) {
            return i;
        }
    }

    return -1;
    
};