module.exports = {
  env: {
    // 当前可以使用哪个环境的全局变量
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    // 'plugin:@typescript-eslint/recommended'
  ], // 集成后， 可以使用别人写好的
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest", // 描述语法的
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 0 off  1 warn  2 error
    quotes: ["error", "double"],
  },
  // ts解析器
  // plugins: ['@typescript-eslint/eslint-plugin'],
  // parser: '@typescript-eslint/parser', // 内部默认用espress
  globals: {
    // 定义全局的变量
    // custom: "readonly"
    custom: "writable",
  },

  //   plugins: ["miku"],
  //   rules: {
  //     "miku/no-var": "error",
  //   },
  extends: ["plugin:miku/recommended"],

  // extends = plugin + rules
};
