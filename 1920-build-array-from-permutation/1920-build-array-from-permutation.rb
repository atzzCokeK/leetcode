# @param {Integer[]} nums
# @return {Integer[]}
def build_array(nums)
    v = Array.new(nums.size)
    nums.each_with_index do |num, index|
        v[index] = nums[num]
    end
    v
end
