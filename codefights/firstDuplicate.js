function firstDuplicate(a) {
  let score = a.length
  let result = -1
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        if (j < score) {
          result = a[j]
          score = j
          continue
        }
      }
      if (i > score && result > 0) {
        return result
      }
    }
  }
  return result
}


// function firstDuplicate(a) {
//   let result = -1
//   for (let i = a.length; i > 0; i--) {
//     for (let j = i - 1; j >= 0; j--) {
//       //console.log(i,j)
//       if (a[i] === a[j]) {
//         result = a[j]
//       }
//     }
//   }
//   return result
// }
//
//
// function firstDuplicate(a) {
//   let score = a.length
//   let result = -1
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[i] === a[j]) {
//         if (j < score) {
//           result = a[j]
//           score = j;
//         }
//       }
//     }
//   }
//   return result
// }


// function firstDuplicate(a) {
//   for (let n of a) {
//     let match = a.find(item => {
//       console.log(item, n)
//       if (n === item) {
//         return n;
//       }
//     })
//     console.log('hjell')
//     return match ? match : -1
//   }
// }

// function firstDuplicate(a) {
//   let match = a.find(item => {
//    return a.find(inner => {
//       console.log(inner, item)
//       if (inner === item) {
//         return inner
//       }
//     })
//   })
//   return match ? match : -1
//
// }

// function firstDuplicate(a) {
//   let last = undefined
//   for (let n of a) {
//     if (last === n) {
//       return n
//     } else {
//       last = n
//     }
//   }
//   return -1
// }

//let a = [2, 3, 3, 1, 5, 2]
let a = [2, 4, 3, 5, 1]
console.log('answer ' + firstDuplicate(a))