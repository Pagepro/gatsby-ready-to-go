module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'react/prop-types': 0,
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Input'],
      },
    ],
    'react/jsx-fragments': ['error', 'element'],
    'react/require-default-props': 0,
    'no-use-before-define': [0],
    'no-shadow': 'off', // replaced by ts-eslint rule below
    '@typescript-eslint/no-shadow': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'spaced-comment': [
          'error',
          'always',
          { markers: ['/'] },
        ] /* Enable TypeScript's Triple-Slash Directives */,
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_+',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_+',
            args: 'none',
          },
        ],
      },
    },
  ],
};
