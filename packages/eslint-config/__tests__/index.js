const test = require('tape')

test('config files parse', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw')
  // prettier-ignore
  t.doesNotThrow(() => require('../.eslintrc.js'), '.eslintrc.js does not throw')
  t.end()
})
