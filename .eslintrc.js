// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: [
//     'plugin:vue/essential',
//     '@vue/standard',
//     'plugin:prettier/recommended'
//   ],
//   plugins: ['prettier'],
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'eslint.enable': 0,
//     'prettier/prettier': 'error'
//   }
// }

// module.exports = {
//   extends: ['plugin:prettier/recommended'],

//   plugins: ['prettier'],

//   rules: {
//     'prettier/prettier': 'error'
//   }
// }

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
  // extends: ['prettier', 'plugin:prettier/recommended'],
  // plugins: ['prettier'],
}
