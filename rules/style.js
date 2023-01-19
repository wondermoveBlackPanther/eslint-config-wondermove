module.exports = {
    rules: {
        // require let or const instead of var
        'no-var': 'error',

        // disallow use of the Object constructor
        'no-new-object': 'error',

        // disallow use of the Array constructor
        'no-array-constructor': 'error',

        // specify whether double or single quotes should be used
        quotes: ['error', 'single', { avoidEscape: true }],

        // require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props.html
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        // require parens in arrow function arguments
        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['error', 'always'],

        // disallow arrow functions where they could be confused with comparisons
        // https://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': ['error', {
            allowParens: true,
        }],

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': ['error', 'beside'],
        
        // disallow importing from the same path more than once
        // https://eslint.org/docs/rules/no-duplicate-imports
        // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'no-duplicate-imports': 'off',

        // enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        }],

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 'error',

        // allow just one var statement per function
        'one-var': ['error', 'never'],

        // disallow declaration of variables that are not used in the code
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        // disallow use of unary operators, ++ and --
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'error',

        // disallow use of console
        'no-console': 'warn',
    }

}