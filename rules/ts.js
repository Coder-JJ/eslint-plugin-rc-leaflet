module.exports = {
  "@typescript-eslint/await-thenable": 2,
  "@typescript-eslint/ban-ts-ignore": 2,
  "@typescript-eslint/explicit-function-return-type": [2, { "allowExpressions": true }],
  "@typescript-eslint/func-call-spacing": 2,
  "@typescript-eslint/generic-type-naming": [2, "^[A-Z][a-zA-Z]*$"],
  "@typescript-eslint/indent": [2, 2, { "SwitchCase": 1 }],
  "@typescript-eslint/member-delimiter-style": [2, {
    "multiline": {
      "delimiter": "none",
      "requireLast": false
    },
    "singleline": {
      "delimiter": "comma",
      "requireLast": false
    }
  }],
  "@typescript-eslint/no-empty-function": [2, { "allow": ["methods"] }],
  "@typescript-eslint/no-explicit-any": 0,
  "@typescript-eslint/no-extraneous-class": [2, {
    "allowConstructorOnly": false,
    "allowEmpty": false,
    "allowStaticOnly": false
  }],
  "@typescript-eslint/no-floating-promises": 2,
  "@typescript-eslint/no-for-in-array": 2,
  "@typescript-eslint/no-inferrable-types": 0,
  "@typescript-eslint/no-non-null-assertion": 0,
  "@typescript-eslint/no-object-literal-type-assertion": [2, { "allowAsParameter": true }],
  "@typescript-eslint/no-unnecessary-qualifier": 2,
  "@typescript-eslint/no-unnecessary-type-assertion": 2,
  "@typescript-eslint/no-unused-vars": [2, { "args": "none", "ignoreRestSiblings": true }],
  "@typescript-eslint/no-useless-constructor": 2,
  "@typescript-eslint/no-var-requires": 0,
  "@typescript-eslint/prefer-for-of": 2,
  "@typescript-eslint/prefer-function-type": 2,
  "@typescript-eslint/prefer-includes": 2,
  "@typescript-eslint/prefer-regexp-exec": 2,
  "@typescript-eslint/prefer-string-starts-ends-with": 2,
  "@typescript-eslint/require-array-sort-compare": 2,
  "@typescript-eslint/restrict-plus-operands": 2,
  "@typescript-eslint/semi": [2, "never", { "beforeStatementContinuationChars": "always" }],
  "@typescript-eslint/unbound-method": 2,
  "@typescript-eslint/unified-signatures": 2
}
