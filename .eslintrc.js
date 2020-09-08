module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'arrow-parens': [2, 'always'],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/prop-types': 1,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-extra-semi': ['error'],
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}
