/// Turns out approach cannot catch corner case such as
/// '  +0 23232'

// "loddktdji"

// try_me l
// try_me lo
// try_me lod
// try_me d
// try_me dk
// try_me dkt
// try_me d
// try_me dj
// try_me dji


/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  //s = 'doug -fresh -34'
  //s = s.trim()
  s = s.replace(/\s/g, '');
  
  if (s.includes('+-') || s.includes('-+') || s.includes('+0') || s == '+' || s == '-') {
      return 0;
  }
  var reg = /^[0-9+-]+/g
  var resultArray = reg.exec(s);
  console.log(resultArray)
  if (resultArray)
      {
        let res = resultArray[0]

          if (res == '-') 
            return 0
          if (parseInt(res) >= 2**31)
              return 2**31 - 1
          else if (parseInt(res) <= -(2**31) ) 
              return -(2**31) 
          else          
              return parseInt(res)
      }
  else 
      return 0;
};



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