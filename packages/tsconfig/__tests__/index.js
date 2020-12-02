const test = require('tape')

test('entry point parses', (t) => {
  t.doesNotThrow(() => require('../tsconfig.base.json'), 'index does not throw')
  t.doesNotThrow(
    () => require('../tsconfig.react.json'),
    'index does not throw',
  )
  t.doesNotThrow(
    () => require('../tsconfig.react.dev.json'),
    'index does not throw',
  )
  t.end()
})
