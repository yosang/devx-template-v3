const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    ...js.configs.recommended, // Uses the ESLint recommended rules
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest', // Supports most recent stable ECMAScript features (optional chaining, nullish coalescing etc)
      // Without this, when used in a NodeJS project, ESLint will flag common Node.js globals as undefined (process.env, require, module.exports etc)
      globals: globals.node,
    },
    plugins: {
      // This plugin allows ESLint to run Prettier as a rule, meaning it will catch formatting flaws and allow us to fix them through eslint with `eslint --fix`
      // This means we achieve full integration with, syntax, formatting and potential bug fix
      prettier: prettierPlugin,
    },
  },
  {
    rules: {
      // quotes: ["error", "double"], // Force double quotes,
      'prettier/prettier': 'error',
    },
  },
  prettier, // Prettier config should be placed last, to override any conflicting formatting rules from ESlint
];
