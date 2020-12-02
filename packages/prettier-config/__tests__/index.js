const test = require('tape')

test('entry point parses', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw')
  t.doesNotThrow(
    () => require('../.prettierrc.json'),
    '.prettierrc.json does not throw',
  )
  t.end()
})
