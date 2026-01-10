# @param {Integer[]} nums
# @return {Integer[]}
def find_error_nums(nums)
    counts = Array.new(nums.length,0)
    nums.each do |i|
        counts[i-1] = counts[i-1] + 1
    end
    r1 = counts.index(2)+1
    r2 = counts.index(0)+1

    return [r1, r2]
end