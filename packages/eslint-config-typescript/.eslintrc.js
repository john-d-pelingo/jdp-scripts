const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'never',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
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
