const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const cli = new eslint.ESLint({
    useEslintrc: false,
    overrideConfigFile: 'index.js',
  })

  const code = `
  const { getName } = require('lib')

  const { exclamationMark } = require('./const')

  const greet = () => {
    const name = getName()
    console.log(\`Hello, \${name}\${exclamationMark}\`)
  }

  greet()
`

  cli.lintText(code).then((result) => {
    const errorCount = result.reduce((acc, r) => {
      return acc + r.errorCount
    }, 0)

    t.equal(errorCount, 0)
    t.end()
  })
})
