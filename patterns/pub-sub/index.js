const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

moduleA.subscribeOn('some-event')
moduleB.publishEvent('some-event', { msg: 'some text' })
