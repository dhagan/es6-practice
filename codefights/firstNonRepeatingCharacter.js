function firstNotRepeatingCharacter(s) {
  let has = {}
  for (let i = 0; i < s.length; i++) {
    if (has.hasOwnProperty(s[i])) {
      has[s[i]]++
    } else {
      has[s[i]] = 1
    }
  }

  console.log(has)

  for (let first in has) {
    if (has[first] == 1) {
      return first
    }
  }

  return '_'
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

module.exports = firstNotRepeatingCharacter
