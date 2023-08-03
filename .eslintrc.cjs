/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["import"],
  overrides: [
    {
      files: ["*.ts", "*.vue"],
      rules: {
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "parent",
              "sibling",
              "index",
              "object",
              "type",
            ],
            pathGroups: [
              {
                pattern: "@/**",
                group: "parent",
                position: "before",
              },
            ],
            alphabetize: {
              order: "asc",
            },
            "newlines-between": "always",
          },
        ],
      },
    },
    {
      files: ["*.vue"],
      rules: {
        "vue/component-name-in-template-casing": [
          "error",
          "kebab-case",
          {
            registeredComponentsOnly: true,
            ignores: [],
          },
        ],
      },
    },
  ],
};
