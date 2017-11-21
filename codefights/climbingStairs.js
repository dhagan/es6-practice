function climbingStairs(n) {

  // 1 1
  // 2 3
  // 3 1,1,1 or 1,2.permute = 1 + 2 = 3
  // 4 1,1,1,1 or 1,1,2.permute or 2,2 = 2 + 3  = 5
  // 5 5*1  2,1,1,1.permute 2,2,1.permute = 1 + 4 + 3 = 8
  // 6 6*1 2,1,1,1,1.permute 2,2,1,1.permute 2,2,2 = 2 + 5 + 6  = 13 // 2,2,1,1 2,1,2,1 2,1,1,2 1,2,2,1 1,1,2,2 1,2,1,2
  // 7 7*1 2,1,1,1,1,1 2,2,1,1,1.permute 2,2,2,1.permute = 1 + 4 + 5 + 6 = 21
  // 8 8*1 2,1,1,1,1,1,1 2,2,1,1,1,1 2,2,2,1,1 4*2 = 2 + 4 + 5 + 6 + 7 =

  // 1
  // 2
  // 3
  // 5
  // 8
  // 13

  n = 26
  console.log( `input ${n}`)
  return fibonacci(n)
  // if (Number.isInteger(n / 2)) {
  //   return 2 + permute(n-1)
  // } else {
  //   //return 1 + permute(n-2)
  //   return -1
  // }
  //
}

// function permute(n) {
//   let result = 0
//   for (let i = n; i > 1; i--) {
//     result = result + i * (i - 1)
//     console.log(result)
//   }
//   return result
// }

function fibonacci (n) {
  let result = []
  result[0] = 1
  result[1] = 2

  if (n ===1 || n ===2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    result[i] = result[i-1] + result[i-2]
  }
  console.log(result)
  return result[n-1]
}

module.exports = climbingStairs