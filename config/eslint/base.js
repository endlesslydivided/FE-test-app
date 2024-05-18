module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['vite.config.ts'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/*/tsconfig.json', './apps/*/tsconfig.json'],
  },
  plugins: ['import', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 2,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': 2,
    'comma-style': ['error', 'last'],
    'default-param-last': 'error',
    'dot-notation': 2,
    'func-names': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'keyword-spacing': 2,
    'key-spacing': 2,
    'linebreak-style': 0,
    'lines-between-class-members': 0,
    'max-len': [
      2,
      {
        code: 130,
      },
    ],
    'multiline-ternary': 0,
    'new-cap': [
      2,
      {
        capIsNew: false,
        newIsCap: true,
      },
    ],
    'no-async-promise-executor': 0,
    'no-class-assign': 0,
    'no-confusing-arrow': 0,
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-empty': 'error',
    'no-extra-semi': 'error',
    'no-inline-styles': 0,
    'no-mixed-operators': 0,
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-named-as-default': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 'off',
    'no-useless-catch': 0,
    'object-curly-newline': 0,
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': [
      0,
      {
        allowEmptyReject: true,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 2,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'quote-props': ['error', 'as-needed'],
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-before-blocks': 2,
    'switch-colon-spacing': 2,
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowedNames: ['styles'],
      },
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: ['JSXElement *', 'JSXElement'],
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['StrictPascalCase'],
        prefix: ['I'],
        selector: 'interface',
      },
      {
        format: ['StrictPascalCase'],
        prefix: ['T'],
        selector: ['typeAlias'],
      },
      {
        format: ['StrictPascalCase'],
        prefix: ['E'],
        selector: 'enum',
      },
    ],
    '@typescript-eslint/space-infix-ops': 2,
  },
};
