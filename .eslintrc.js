module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    "prettier",
    "jsx-a11y"
  ],
  extends: [
    "next",
    "next/core-web-vitals",
    // 'airbnb-typescript',
    "prettier",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:jsx-a11y/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'
  ],
  rules: {
    // 'import/prefer-default-export': 'off',
    // 'class-methods-use-this': 'off',
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
  },

};
