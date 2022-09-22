/**
 * 
 * lessons learned:
 * 1) initialize array with Array() - don't forget capital
 * 2) multi dimenisonal array initialization
 * 3) 
 * 
 * @param {} s 
 * @param {*} numRows 
 * @returns 
 */

var convert = function (s, numRows) {
  let str = s.split('')
  let a = new Array(numRows)
  for (var i = 0; i < numRows; i++) {
    a[i] = new Array();
  }
  let col = 0
  let rowCount = 0
  str.forEach(val => {
    let mod = col % (numRows - 1)
    if (mod) {
     console.log('>>>', numRows - mod -1, val)
      a[numRows - mod -1 ].push(val)
      col++
    } else {
      let j = rowCount++
      console.log('xxxx', j, val)
      a[j].push(val)
      if (rowCount == numRows) {
        rowCount = 0
        col++
      }
    }

  })
  let retString = ''
  for (var i = 0; i < numRows; i++) {
    retString = retString + a[i].join('')
  }
  console.log(retString)
  return retString
};

s = "PAYPALISHIRING"
numRows = 3

console.log(convert(s, numRows))