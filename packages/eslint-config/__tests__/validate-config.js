const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
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

  const result = cli.executeOnText(code)

  t.equal(result.errorCount, 0)
  t.end()
})
