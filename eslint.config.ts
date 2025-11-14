import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import jestLint from 'eslint-plugin-jest';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  ...compat.extends('plugin:import/typescript'),
  {
    ignores: [
      '**/.git',
      '**/coverage',
      '**/lib',
      '**/static',
      '**/node_modules',
      '**/docs',
      '**/dist',
    ],
  },
  {
    plugins: { sonarjs },
  },
  {
    plugins: { unicorn: eslintPluginUnicorn },
  },
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    rules: {
      semi: 'error',
      quotes: ['error', 'single'],
      'import/no-named-as-default-member': 'off',
      'no-console': 'error',
      // code smell rules
      'max-params': ['error', 4], // 3 is the default
      '@typescript-eslint/no-dynamic-delete': 'error',
      'no-delete-var': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unreachable': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-empty-function': 'error',
      'no-empty-pattern': 'error',
      'no-extra-boolean-cast': 'error',
      'no-lone-blocks': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'class-methods-use-this': 'error',
      '@typescript-eslint/no-magic-numbers': 'off',
      complexity: 'error',
      'max-depth': 'error',
      'max-lines-per-function': ['error', 199], // ridiculous amont lower to 10
      'max-nested-callbacks': 'error',
      'max-statements': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          format: ['camelCase', 'strictCamelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
      ],
      'import-namespace': 'off',
      'sonarjs/no-element-overwrite': 'error',
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-duplicated-branches': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-identical-functions': 'error',
      'sonarjs/no-extra-arguments': 'error',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-unused-collection': 'error',
      'no-unreachable-loop': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/cognitive-complexity': 'error',
      'sonarjs/max-switch-cases': 'error',
      'unicorn/better-regex': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-unused-properties': 'error',
    },
  },

  {
    files: ['**/*.[spec|test].ts'],
    ...jestLint.configs['flat/recommended'],
    rules: {
      ...jestLint.configs['flat/recommended'].rules,
      // code smell rules
      'jest/no-commented-out-tests': 'error',
      'jest/no-disabled-tests': 'error',
      'import-namespace': 'off',
    },
  },
]);
