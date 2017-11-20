const assert = require('./helpers/assert')

class P {
    constructor() {
        if (typeof new.target.id === 'undefined') {
            throw new Error('Class requires ID')
        }
        assert.equals(new.target.id, 2)
    }
}

class S extends P {
    static get id() {
        return 2
    }

    constructor() {
        super()
    }
}

let s = new S()

try {
    let p = new P()
}
catch (ex) {
    assert.equals(ex.message, 'Class requires ID')    
}


// assert.equals(b, 2)

console.log(__filename + ' passed')