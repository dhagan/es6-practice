// [3, 1, 2, 3, 4, 5]

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
// let a = new ListNode(5)
// let b = new ListNode(4)
// let c = new ListNode(3)
// let d = new ListNode(2)
// let e = new ListNode(1)
// let f = new ListNode(3)
//
// f.next = e;
// e.next = d;
// d.next = c;
// c.next = b;
// a.next = b;


function removeKFromList(l, k) {

  let start = {}
  while (l) {
    console.log(l.value, start.value)
    if (!start.value && l.value != k) {
      Object.assign(start, l)
    }
    else if (l.next && l.next.value == k) {
      l.next = l.next.next
    }
    l = l.next
  }

  let array = []
  while (start) {
    array.push(start.value)
    start = start.next
  }
  console.log(array)

  return start.next ? start : l
}

// function removeKFromList(l, k) {
//
//   let start = {}
//   let last = {}
//
//   while (l) {
//     console.log(l.value, start.value, last.value)
//     if (l.value == k) {
//       if (last.next) {
//         last.next = l.next
//       }
//     } else {
//       if (!start.value) {
//         start = {}
//         Object.assign(start, l)
//       }
//     }
//     last = l
//     l = l.next
//   }
//
//   // let array = []
//   // while (start) {
//   //   array.push(start.value)
//   //   start = start.next
//   // }
//   // console.log(array)
//
//   return start.next ? start : l
// }


// function removeKFromList(a, k) {
//
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == k) {
//       a.splice(i, 1)
//     }
//   }
//   return a
// }

module.exports = removeKFromList