const config = require('./global')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      blockBindings: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      legacyDecorators: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ...config,
  extends: [
    'eslint:recommended'
  ]
}
