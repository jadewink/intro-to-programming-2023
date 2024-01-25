module.exports = {
  plugins: [
    '@stylistic/js'
  ],
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    'indent': ['error', 2],
    '@stylistic/js/indent': ['error', 2],
    'no-unused-vars': "warn"
  }
}
