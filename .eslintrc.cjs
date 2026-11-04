module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: [
        'src/components/About.jsx',
        'src/components/Contact.jsx',
        'src/components/Experience.jsx',
        'src/components/Feedbacks.jsx',
      ],
      rules: { 'react-refresh/only-export-components': 'off' },
    },
    {
      files: ['src/components/canvas/**/*.jsx'],
      rules: { 'react/no-unknown-property': 'off' },
    },
  ],
}
