module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    "space-before-function-paren": ["error", "always"],
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  },
  'globals': {
    "fetch": false
  },
  "plugins": [
    "prettier"
  ]
}