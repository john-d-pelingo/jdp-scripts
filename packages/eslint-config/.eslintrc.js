const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['import'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'import/no-default-export': 'error',
    'import/no-deprecated': 'warn',
    'import/order': [
      'error',
      {
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
}

module.exports = config
