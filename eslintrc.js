module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'brace-style': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'func-names': 0,
    'global-require': 0,
    'import/extensions' : 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export' : 0,
    'indent': ['error', 4, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],
    'max-classes-per-file': 0,
    'max-len': 0,
    'new-cap' : 0,
    'no-alert': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-empty': 0,
    'no-empty-function': 0,
    'no-extra-boolean-cast': 0,
    'no-nested-ternary' : 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 0,
    'no-trailing-spaces': 0,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-useless-escape' : 0,
    'no-useless-return': 0,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-rest-params': 0,
    'radix': 0,
    'space-in-parens': 0,
    'symbol-description': 0,
    'template-curly-spacing': 0
  },
};
