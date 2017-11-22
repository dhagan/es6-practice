// import * as lib from 'climbingStairs-1'
//const climbingStairs = require('./climbingStairs')
const removeKFromList = require('./removeKFromList')
//const firstDuplicate = require('./firstDuplicate')
const firstNotRepeatingCharacter = require('./firstNonRepeatingCharacter')

function main () {
  //a =  [3, 1, 2, 3, 4, 5]
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  let a = new ListNode(3)
  let b = new ListNode(1)
  let c = new ListNode(2)
  let d = new ListNode(3)
  let e = new ListNode(4)
  let f = new ListNode(5)

  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = f

  console.log( 'result: ' + removeKFromList(a, 3))
  // let a = [2,3,3,1,1,2]
  // console.log( 'result: ' + firstDuplicate(a))
  //console.log('result ' + firstNotRepeatingCharacter('adfasdzfaadfafiowerw'))
}

main()