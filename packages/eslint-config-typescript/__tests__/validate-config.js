const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
  })

  const code = `
  import { getName } from 'lib'

  import { exclamationMark } from './const'

  const greet = (): void => {
    const name = getName()
    console.log(\`Hello, \${name}\${exclamationMark}\`)
  }
`

  const result = cli.executeOnText(code)

  t.equal(result.errorCount, 0)
  t.end()
})
