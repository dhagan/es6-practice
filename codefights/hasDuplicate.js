function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length - 1; j++) {
      if (a[i] === a[j]) {
        return true
      }
    }
  }
  return false
}

let a = [2, 3, 3, 1, 5, 2]
//let a = [2, 4, 3, 5, 1]
console.log('answer ' + firstDuplicate(a))