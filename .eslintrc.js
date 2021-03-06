module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'arrow-parens': ['error', 'as-nedded', {requireForBlockBody: true}],
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    'prefer-destructuring': ['error', {
      'object': true,
      'array': false,
    }],
    'vue/html-indent': ['error', 'tab'],
    'vue/max-attributes-per-line': ['error', {
      'singleLine': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/script-indent': ['error', 'tab', {
      'baseIndent': 1,
      'switchCase': 1,
    }],
    'vue/singleLine-html-element-content-newline': 'off',
  },
};
