var array1 =[0,0,1,1,1,2,2,3,3,4];

function removeDuplicates( nums) {
  for ( let i = nums.length ; i >= 0; i-- ) {
    //console.log(i, nums[i], nums)
    if (nums[i-1] == nums[i]) {   
      nums.splice(i, 1)
    }
  }
  console.log(nums)
  return nums.length
}

// array1.forEach ( (value ) =>
// {
//   console.log(value)

// })


// function removeDuplicates( nums) {

//     for ( let i = nums.length -1 ; i > 0; i-- ) {
//       if (nums[i-1] == nums[i]) {
//         if (i != nums.length -1) {
//           nums[i-1] = nums[i+1]
//           nums.pop()
//         } else {
//           nums[i] = null
//         }
//       }
//     }
//     return nums.length
//   }



// function removeDuplicates( nums) {

//   for ( let i = 1; i < nums.length; i++) {
//     if (nums[i-1] == nums[i]) {
//       if (i != nums.length -1) {
//         nums[i] = nums[i+1]
//       } else {
//         nums[i] = null
//       }
//     }
//   }
//   for ( let i = nums.length - 1; i > 0; i--) {
//     if (nums[i] === null)
//     {
//       nums.pop()
//     } else {
//       break;
//     }
//   }
//   console.log(nums)
//   return nums.length
// }

// function removeDuplicates( nums) {

//   let last
//   let retArray = []
//   for ( let value in nums) {
//     if (last != value) {
//       retArray.push(value)
//     }
//     last = value
//   }
//   return retArray.length

// }

console.log(removeDuplicates(array1))