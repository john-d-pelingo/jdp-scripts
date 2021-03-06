const test = require('tape')

test('config files parse', (t) => {
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
