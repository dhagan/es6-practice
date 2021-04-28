/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let config = require('./config')

console.log(config);

var twoSum = function (nums, target) {
  if (!nums) {
    throw new Exception()
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (j == i) {
        continue;
      }
      if (nums[i] + nums[j] == target) {
        console.log( [i,j])
        return [i, j]
      }
    }
  }
};

twoSum([2,7,11,15], 9)