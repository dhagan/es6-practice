function firstDuplicate(a) {
  let counts = []
  for (let value of a) {
    if (counts[value]) {
      return value
    }
    counts[value] = true
  }
  return -1
}


// function firstDuplicate(a) {
//   let score = a.length
//   let result = -1
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[i] === a[j]) {
//         if (j < score) {
//           result = a[j]
//           score = j
//           continue
//         }
//       }
//       if (i > score && result > 0) {
//         return result
//       }
//     }
//   }
//   return result
// }

module.exports = firstDuplicate