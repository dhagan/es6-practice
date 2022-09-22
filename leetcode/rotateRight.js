//nums = [1,2,3,4,5,6,7], k = 3
nums = [-1,-100,3,99]
k = 2


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var rotateRight = function(nums, k) {
    if (k > nums.length) {
        k = k%nums.length
    }

    // ith = []
    // for (i = 0; i < k; i++) {
    //     j = nums.pop();
    //     nums.unshift(j) 
    //     console.log(nums)  
    // }

    first = nums.slice(0, nums.length-k)
    console.log(first)
    //last = nums.slice(k+1, nums.length)
    //console.log(last)
    nums.splice(0,nums.length - k)
    console.log(nums)
    nums.push(...first)
    //nums = res

    // nums[0] =999
    //console.log(nums)
    
    
};

rotateRight(nums, k)
console.log(nums)