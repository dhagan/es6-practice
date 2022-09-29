
// map = new Map()
// map.set ('I',1 )
// map.set ('V', 5)
// map.set ('X', 10)
// map.set('L', 50)
// map.set ('C', 100)
// map.set('D', 500)
// map.set('M', 1000)


map = {
    I : 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const romanToInt = (s) =>
{
    let res = 0
    let a = s.split("")
    // for (let n of a) {
    //    res += parseInt(map.get(n))
    // }
    for (const key of a) {
        res += map[key]
    }

    let object = a
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }

    return res
}

let s = "III"
console.log(romanToInt(s))