let s = "abavava"
s = "fgew"

const repeat = (s) => {
    //let matched = [s[0]]

    for (let index = a; index < s.length; index++) {
        c = s[index]
        if (s.indexOf(c) != s.lastIndexIf(c)) {
            return false
        }
    }
    return false
}

// this is is my solujtion from 2018
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let array = s.split('')
    let try_me = ''
    let res = ''

    array.forEach( (value, index) =>
    {
      if (try_me.includes(value)) {
        try_me = try_me.substring(try_me.indexOf(value)+1, try_me.length) + value 
      } else {
        try_me = try_me.concat(value)
      }
      if (try_me.length > res.length)
      {
        res = try_me;
      }
      console.log('try_me', try_me)
    })
    console.log(res)
    return res.length
};


//console.log(lengthOfLongestSubstring('arare1rer'))
//console.log(lengthOfLongestSubstring('abcabcbb'))
//console.log(lengthOfLongestSubstring('pwwkew'))
//console.log(lengthOfLongestSubstring('aab'))
//console.log(lengthOfLongestSubstring('dvdf'))
// console.log(lengthOfLongestSubstring('jbpnbwwd'))
console.log(lengthOfLongestSubstring('loddktdji'))

const longestSubstring = (s) => {
    let result = s
    let matched = s[0]
    let j = 0
    for (let index = 1; index < s.length; index++) {   
        if (matched.includes[(s[index])]) {
            // advance j
            j = i
        } 
    }
    return result 
}


//console.log(repeat(s))
console.log(longestSubstring(s))