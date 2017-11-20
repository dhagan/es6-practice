const assert = require('./helpers/assert')


assert.equals(-0, 0)
assert.equals(Object.is(-0, 0), false)

assert.equals(NaN === NaN, false)
assert.equals(Object.is(NaN, NaN), true)


let a = {
    q: 1
}
let b = {
    w: 2
}
let c = {
    e: 3
}

let d = Object.assign({}, a, b, c)

assert.equals(d.q, a.q)
assert.equals(d.w, b.w)
assert.equals(d.e, c.e)

let name = 'taco'
let e = {
    [name]: 'burrito'
}
assert.equals(e.taco, 'burrito')


let z = { a: 1 }
let x = { a: 5, b: 2 }

Object.defineProperty(x, 'c', {
    value: 10,
    enumerable: false
})

assert.equals(x.c, 10)

let taco = {
    title: 'asdf',
    [Symbol.for('article')]: 'My article'
}

assert.equals(Object.getOwnPropertySymbols(taco).length, 1)

console.log(String.raw`asdfa\u{1f3c4}sdf`)
console.log(`10`.repeat(10))

let ar = /900/yg
console.log(ar.flags)
console.log(/900/y.lastIndex)
console.log(/900/y.test('800900'))

console.log(Array(9000).length)
console.log(Array.of(9000).length)
console.log(Array.from([1, 2, 3], _ => _ + 100))
console.log(Array.from([1, 2, 3], _ => _ + this.amount, { amount: 20 }))
console.log(Array.from([1, 2, 3], function (_) { return _ + this.amount }, { amount: 20 }))

console.log([1, 1, 1, 1].fill('a'))
console.log([1, 1, 1, 1].fill('a', 2))
console.log([1, 1, 1, 1].fill('a', 2, 3))

console.log(...['a', 'b', 'c'].entries())
console.log(...['a', 'b', 'c'].keys())
console.log(...['a', 'b', 'c'])

console.log((new Array(1024)).length)

let first = { n: 'a' }
let second = { n: 'b' }

let all = new Map([
    [first, 'z'],
    [second, 'y']
])
console.log(all.has(first))
console.log(...all.values())


console.log(__filename + ' passed')



