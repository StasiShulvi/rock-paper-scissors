module.exports = {
  extends: [
    'react-app',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'stylelint.config.js',
    '.idea',
  ],
  parserOptions: {
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src/**',
        ],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        moduleDirectory: [
          'node_modules',
          'src',
        ],
      },
    },
  },
  rules: {
    'react/jsx-tag-spacing': ['error', {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    'no-trailing-spaces': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'import/prefer-default-export': 0,
    'consistent-return': 'off',
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.jsx',
          '.tsx',
        ],
      },
    ],
    quotes: ["error", "single", { "avoidEscape": true }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    'object-curly-newline': 'off',
    'react/jsx-first-prop-new-line': 2,
    'global-require': 'off',
    'default-case': 'off',
    'no-continue': 'off',
    'prefer-template': 'warn',
    'arrow-parens': [
      'error',
      'always',
    ],
    'no-floating-decimal': 'off',
    'func-names': [
      'error',
      'never',
    ],
    'func-style': [
      'error',
      'expression',
    ],
    camelcase: 'off',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'function-paren-newline': 'off',
    'prefer-destructuring': 'off',
    'default-param-last': 'off',
    'no-restricted-exports': 'off',
    'function-call-argument-newline': 'off',
    'no-control-regex': 'off',
    curly: [
      'error',
      'multi-line',
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'prefer-promise-reject-errors': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': [
      'error',
      'never',
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'react/jsx-no-bind': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 3,
        when: 'multiline',
      },
    ],
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/no-this-in-sfc': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unused-class-component-methods': 'off',
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 2,
    '@typescript-eslint/object-curly-spacing': 'off'
  },
};
