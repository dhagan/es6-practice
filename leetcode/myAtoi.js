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

