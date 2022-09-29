function reverse( i) {
  let _i = parseInt(i.toString().split("").reverse().join(""))
  console.log(_i)
}

reverse(123)

module.exports = reverse