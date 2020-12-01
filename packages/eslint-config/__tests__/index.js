const test = require('tape');

test('entry point parses', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw');
  t.end();
});
