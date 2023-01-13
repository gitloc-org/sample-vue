/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  rules: { "vue/valid-template-root": "off" },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue', '@typescript-eslint'],
}
