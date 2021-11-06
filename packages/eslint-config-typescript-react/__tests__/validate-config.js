const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', async (t) => {
  const cli = new eslint.ESLint({
    useEslintrc: false,
    overrideConfigFile: 'index.js',
  })

  const code = `
  import { getName } from 'lib'

  import { exclamationMark } from './const'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Hello = ({ surname }: { surname: string }) => {
    const fullName = \`\${getName()} + \${surname}\`
    return <div>Hello, {fullName}{exclamationMark}</div>
  }
`

  const result = await cli.lintText(code)

  const errorCount = result.reduce((acc, r) => {
    return acc + r.errorCount
  }, 0)

  t.equal(errorCount, 0)
  t.end()
})
