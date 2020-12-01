const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks'],
  extends: [
    '@jdp-dev/eslint-config-typescript',
    'plugin:react/recommended',
    'prettier/react',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/ignore': ['node_modules'],
    react: {
      version: 'detect',
    },
  },
}

module.exports = config
