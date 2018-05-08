var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('Test suite', function() {
  it('should work', function() {
    assert(true)
  })
})

mocha.run()