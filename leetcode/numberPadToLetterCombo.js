/**
 * @param {string} digits
 * @return {string[]}
 */

 let pad = {
    '2' : [ 'a', 'b', 'c'],
    '3' : [ 'd', 'e', 'f'],
    '4' : ['g', 'h', 'i'],
    '5' : ['j', 'k', 'l'],
    '6' : [ 'm', 'n', 'o'],
    '7' : ['p', 'q', 'r', 's'],
    '8' : ['t', 'u', 'v'],
    '9' : ['w', 'x', 'y', 'z']

}

function combine (a,b) {
    let res = []
    if (a.length == 0) {
        res = Object.assign(res,b)
        return res
        
    }
    for (let i = 0; i < a.length; i++) {
         for (let j = 0; j < b.length; j++) {
             res.push(a[i] + b[j])
         }
    }
    return res
    
}
var letterCombinations = function(digits) {
    arr = digits.split("")
    res = []
    for (d of arr) {
        res = combine(res, pad[d])
    }
    
    //     arr.forEach( (element) => {
    //     res = combine(res, element)
    // })
    return res
    
};