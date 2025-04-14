// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angular.configs.tsRecommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@typescript-eslint/no-deprecated": "warn",
      "no-restricted-imports": ["error", "rxjs/Rx"],
      "max-classes-per-file": "off",
      "max-len": [
        "error",
        {
          code: 140,
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "static-field",
            "instance-field",
            "static-method",
            "instance-method",
          ],
        },
      ],
      "no-multiple-empty-lines": "off",
      "no-empty": "off",
      "@typescript-eslint/no-inferrable-types": [
        "error",
        {
          ignoreParameters: true,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "error",
      "no-fallthrough": "error",
      "no-use-before-define": ["error", { "classes": false }],
      "@typescript-eslint/no-require-imports": "error",
      "quote-props": ["error", "as-needed"],
      "sort-keys": "off",
      "sort-imports": "off",
      "quotes": ["error", "single", { "allowTemplateLiterals": true }],
      "comma-dangle": "off",
      "@angular-eslint/no-output-on-prefix": "error",
      "@angular-eslint/no-input-rename": "error",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/use-pipe-transform-interface": "error",
      "@angular-eslint/component-class-suffix": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: ["app", "webix"],
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: ["app", "webix"],
          style: "kebab-case",
        },
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
