export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "one-var": ["error", "never"],
    "no-unused-vars": ["warn"],
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
    quotes: ["error", "single"],
    "eol-last": ["error", "always"],
    "no-else-return": ["warn", { allowElseIf: false }],
    camelcase: ["error", { properties: "always" }],
    "react/prop-types": "on", // TypeScript kullanıyorsanız kapatın
    "react/jsx-pascal-case": ["error"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
  },
};
