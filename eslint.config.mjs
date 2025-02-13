import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginHtml from 'eslint-plugin-html';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      html: eslintPluginHtml,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
];
