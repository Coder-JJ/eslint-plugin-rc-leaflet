const config = require('./global')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      blockBindings: true
    },
    tsconfigRootDir: './',
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ...config,
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ]
}
