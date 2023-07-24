# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    words = s.split
    return words[-1].length
end