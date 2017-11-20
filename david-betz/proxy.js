const assert = require('assert')

const getEntity = () => {
    let actualData = {
        q: 1,
        w: 2,
        e: 3
    }

    let p = new Proxy(actualData, {
        get: (target, property) => {
            if (property === 'w') {
                return 'REDACTED'
            }
            else {
                return target[property]
            }
        },
        set: (target, property, value) => {
            if (property === 'e') {
                throw new Error('e is protected')
            }
        }
    })
    return p
}

let proxy = getEntity()


assert.equal(proxy.q, 1)
assert.equal(proxy.w, 'REDACTED')

try {
    proxy.e = 'asdf'
}
catch (ex) {
    assert.equal(ex.message, 'e is protected')
}

console.log(__filename + ' passed')

