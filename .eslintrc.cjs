const path = require('path');

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],

  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.eslint.json'),
  },

  env: {
    browser: false,
    node: true,
  },

  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': ['error', {allow: ['_id']}],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '**/*.js', '**/*.jsx'],
      extends: ['prettier'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          // your babel options
          presets: ['@babel/preset-env'],
        },
      },
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
};