/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      extends: ['plugin:markdownlint/recommended']
    }
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'no-debugger': 'error',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      {varsIgnorePattern: '.*', args: 'none'}
    ],
    'quote-props': ['error', 'consistent-as-needed'],
  }
}
