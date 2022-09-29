"use strict";

let s = "babadcacacaca"
// 9/28/22 - this works but it's slow
const longestPalindromeSlow = (s) => {
    let high = s.substring(0, 1)
    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            let p = s.substring(i, j)
            if (p == p.split("").reverse().join("")) {
                if (p.length > high.length) {
                    high = p
                    console.log(high)
                }
            }
        }
    }
    return high
}

const isPalindrome = (s, i, j) =>  {
    return (s.substring(i,j) == s.substring(i,j).split("").reverse().join(""))
}

const numberIsPalindrome = (i) => {

    s = i.toString()
    let reverse = i.toString().split("").reverse().join("")
    return (s == reverse)
}

console.log(numberIsPalindrom(121))
// const longestPalindrome(s) => {
//     let i = 0
//     let j = 1
//     while (true) {
//         if (isPalindrome(i,j)) {
//             j++
//         } else {
//             i++ 
//             j++
//         }
//     }
// }

//console.log(longestPalindrome(s))