var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')

chai.should()
chai.use(sinonChai)

function hello(name, cb) {
  cb('hello ' + name)
}

var cb = sinon.spy()
hello('world', cb)
cb.should.have.been.calledWith('this test should fail')