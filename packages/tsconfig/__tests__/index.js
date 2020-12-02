const test = require('tape')

test('entry point parses', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw')
  t.doesNotThrow(
    () => require('../tsconfig.base.json'),
    'tsconfig.base.json does not throw',
  )
  t.doesNotThrow(
    () => require('../tsconfig.react.json'),
    'tsconfig.react.json does not throw',
  )
  t.doesNotThrow(
    () => require('../tsconfig.react.dev.json'),
    'tsconfig.react.dev.json does not throw',
  )
  t.end()
})
