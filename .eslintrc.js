module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'vue/html-indent': [
      'error',
      2,
      {
        'attribute': 2
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 1,
        'multiline': {
          'max': 1,
          'allowFirstLine': true
        }
      }
    ],
    'linebreak-style': 0,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-empty': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0
  }
}
