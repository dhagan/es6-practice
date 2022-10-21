// [1,2,3,1]
// 3
// [1,0,1,1]
// 1
// [1,2,3,1,2,3]
// 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set()
    set.add(nums[0])
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= k; j++) {
            if (j + i > nums.length) 
                break 
            if (set.has(nums[i+j]))
                return true
            set.add(nums[i+j])
            console.log(i, j, nums[i+j],set)
        }
        set = new Set()
        set.add(nums[i])
    }
    return false
    
};
