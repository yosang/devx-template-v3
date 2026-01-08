# JavaScript Project Template with ESLint + Prettier and Jest

This project serves as a demonstration of how to setup ESLint with Prettier, Jest and Github ACtions.

## Getting started
Install NodeJS dependencies with `npm install` 

Packages on this project:

- `jest` - Jest core dependency 
- `prettier` - Prettier core dependency
- `eslint` - ESlint core dependency
- `@eslint/js` - ESLint JavaScript implementation.
- `globals` - Global identifiers for different JavaScript environments, like Node, Jest any many more...
- `eslint-plugin-prettier` - Disables ESlint formatting rules and allows Prettier to be exectued through ESlint as a rule.

### Prettier Configuration

In file `.prettierrc`

```json
{
  "arrowParens": "always",
  "semi": true,
  "singleQuote": true
}

```

### ESLint Configuration

In file `eslint.config.js`

```js
const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    ...js.configs.recommended,
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
  prettier,
];
```

## Usage

The scripts available are:

- `npm run format` to execute formatting rules through prettier
- `npm run lint` to execute linting rules for syntax errors and potential bugs through ESlint.
- `npm run test` to run all available tests

## Credits

[Yosmel Chiang](https://github.com/yosang)
