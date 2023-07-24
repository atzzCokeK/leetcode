# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
    # set 0 to default
    magazine_counts = Hash.new(0)
    # magazineにeachして、magazine_countsにsetする
    magazine.each_char { |char| magazine_counts[char] += 1 }
  
    ransom_note.each_char do |char|
        return false if magazine_counts[char] <= 0
        magazine_counts[char] -= 1
    end
  
    true
end