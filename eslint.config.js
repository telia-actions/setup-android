const jestPlugin = require('eslint-plugin-jest');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const checkFile = require('eslint-plugin-check-file');
const globals = require('globals');

module.exports = [
    {
        ignores: ['dist/', 'lib/', 'node_modules/']
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            jest: jestPlugin,
            '@typescript-eslint': tsPlugin,
            'check-file': checkFile,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
            },
            globals: {
                ...globals.node,
                ...globals.es6,
                ...globals.jest,
            },
        },
        rules: {
            'check-file/filename-naming-convention': ['error', {
                '**/*.ts': 'KEBAB_CASE',
            }],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'no-public'}],
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/ban-ts-comment': 'error',
            camelcase: 'off',
            '@typescript-eslint/consistent-type-assertions': 'error',
            '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}],
            'func-call-spacing': ['error', 'never'],
            '@typescript-eslint/no-array-constructor': 'error',
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-extraneous-class': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-useless-constructor': 'error',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/prefer-function-type': 'warn',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            semi: ['error', 'never'],
            '@typescript-eslint/unbound-method': 'error',
        },
    },
];
