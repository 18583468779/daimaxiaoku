import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue]"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      // Vue 规则
      "vue/multi-word-component-names": ["error", { ignores: ["App"] }], // 允许单文件组件使用单一词名称，例如 App.vue
      "vue/require-default-prop": "off", // 允许省略 props 的默认值
      "vue/require-v-for-key": "error", // 要求列表渲染使用 key 属性
      "vue/no-v-html": "warn", // 警告使用 v-html 指令
      "vue/valid-v-slot": "error", // 确保 v-slot 指令正确使用
      "vue/valid-v-bind": "error", // 确保 v-bind 指令正确使用
      "vue/valid-v-on": "error", // 确保 v-on 指令正确使用
      "vue/require-render-return": "error", // 确保 render 函数返回值
      "vue/no-side-effects-in-computed-properties": "warn", // 计算属性中不应有副作用
      "vue/no-template-shadow": "error", // 禁止在子组件模板中使用相同的名称
      "vue/no-reserved-keys": "error", // 禁止在组件中使用保留关键字
      "vue/return-in-computed-property": "error", // 计算属性必须有返回值
      "vue/one-component-per-file": "error", // 一个文件只能有一个组件
      "vue/require-component-is": "error", // 要求组件使用 is 属性
      "vue/require-name-property": "error", // 要求组件使用 name 属性
      "vue/no-parsing-error": "error", // 禁止模板解析错误
      "vue/no-duplicate-attributes": "error", // 禁止在同一个元素上使用重复的属性
      "vue/no-unused-vars": "warn", // 警告未使用的变量
      "vue/match-component-filename": "error", // 组件名应与文件名匹配

      // TypeScript 规则
      "@typescript-eslint/ban-ts-ignore": "off", // 允许使用 // @ts-ignore
      "@typescript-eslint/explicit-module-boundary-types": "error", // 要求模块的边界明确类型
      "@typescript-eslint/no-empty-interface": "warn", // 警告空接口
      "@typescript-eslint/no-inferrable-types": "off", // 允许省略类型注解
      "@typescript-eslint/no-non-null-assertion": "off", // 允许使用非空断言
      "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }], // 警告未使用的变量
      "@typescript-eslint/no-var-requires": "off", // 允许使用 require
      "@typescript-eslint/camelcase": "off", // 允许使用驼峰命名法

      // ES6+ 规则
      "no-const-assign": "error", // 禁止修改 const 变量
      "no-dupe-class-members": "error", // 禁止重复类成员
      "no-this-before-super": "error", // 禁止在构造函数中使用 this 或 super 之前使用
      "no-duplicate-imports": "error", // 禁止重复导入
      "no-new-symbol": "error", // 禁止使用新的 Symbol
      "no-restricted-imports": ["error", "lodash"], // 禁止导入指定模块
      "no-useless-constructor": "error", // 禁止无用的构造函数
      "no-prototype-builtins": "off", // 允许使用对象原型内置属性
      "no-async-promise-executor": "error", // 禁止无效的 async 函数
      "no-misleading-character-class": "error", // 正则表达式禁止误导性字符类
      "require-atomic-updates": "error", // 要求原子更新
    },
  },
];
