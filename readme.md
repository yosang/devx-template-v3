# JavaScript Project Template with ESLint + Prettier and Jest

This project serves as a demonstration of how to setup ESLint with Prettier, Jest and Github ACtions.

## Installation & Configuration

### 1. Install Prettier

To install prettier use:

```sh
npm i -D prettier
```

### 2. Install Jest

To install jest use:

```sh
npm i -D jest
```

### 3. Install ESlint with JavaScript, Prettier and Jest support.

To install ESlint and the additional packages used in this config use:

```sh
npm i -D eslint @eslint/js globals eslint-plugin-prettier
```

Explanation of the packages:

- `eslint` - ESlint core dependency
- `@eslint/js` - ESLint JavaScript implementation.
- `globals` - Global identifiers for different JavaScript environments, like Node, Jest any many more...
- `eslint-plugin-prettier` -

### Configuration

Create a file named `eslint.config.js` and add the following code

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

Scripts available are:

- `npm run format` to execute formatting rules through prettier
- `npm run lint` to execute linting rules for syntax errors and potential bugs through ESlint.
- `npm run test` to run all available tests

## Credits

[Yosmel Chiang](https://github.com/yosang)
