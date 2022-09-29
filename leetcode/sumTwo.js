"use strict"
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let config = require('./config')

console.log(config);

var twoSumBruteForce = function (nums, target) {
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

/**
 * solution after reading hint 9/28/22
 * 
 * @param {} nums 
 * @param {*} target 
 * @returns 
 */
var twoSum = ( nums, target) =>
{
  let map = new Map() 
  let i = 0
  for ( let n of nums) {
    map.set(n, i++)
  }
  console.log(map)
  i = 0


  for (let n in nums) {
    let compliment = target -n 
    if (map.has(compliment) && map.get(compliment) != i) {
      return [i, map.get(compliment)]
    }
    i++
  }

}

console.log(twoSum([2,7,11,15], 9))