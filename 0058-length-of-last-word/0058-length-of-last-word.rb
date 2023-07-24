# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    words = s.split
    p(words)
    return words.empty? ? 0 : words[-1].length
end