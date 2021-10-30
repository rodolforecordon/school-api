module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/no-self-import': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
  },
};
