const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    ...js.configs.recommended, // Uses the ESLint recommended rules
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest', // Supports most recent stable ECMAScript features (optional chaining, nullish coalescing etc)
      // globals.node prevents ESLint from flaggin common Node.js globals as undefined (process.env, require, module.exports etc)
      // globals.jest prevents ESLint from flaggin jest globals as undefined (describe, test, expect etc)
      globals: globals.node,
    },
  },
  // Jest specific configuration for test files only
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },

  // Disables any conflicting rules with Prettier from ESlint
  // The `/recommended` allows ESLint to run Prettier as a rule, meaning it will catch formatting flaws and allow us to fix them through eslint with `eslint --fix`
  // This means we achieve full integration with, syntax, formatting and potential bug fix
  // Reference: https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs
  prettier, // Should be placed last
];
