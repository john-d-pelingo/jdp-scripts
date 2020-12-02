const test = require('tape')

test('config files parse', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw')
  t.doesNotThrow(
    () => require('../.commitlintrc.js'),
    '.commitlintrc.js does not throw',
  )
  t.end()
})
