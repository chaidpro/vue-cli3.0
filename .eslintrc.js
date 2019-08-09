module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "off"
    ],
    "semi": [
      2, "always"
    ],
    "no-console": [
      "off"
    ],
    'no-tabs': 'off',
    //new实例可以不赋值给变量，new Vue()
    "no-new": ["off"],
    // 是否禁止无用的表达式
    'no-unused-expressions': 0,
    // 取消禁止扩展原生对象
    "no-extend-native": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}