const isDev = process.env.NODE_ENV !== "production",
    e = isDev ? "warn" : "error";

module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true
    },
    extends: "eslint:recommended",
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    plugins: ["html"],
    globals: {
        console: isDev
    },
    rules: {
        // Possible Errors
        "no-console": e,
        "no-debugger": e,

        // Best Practices
        curly: e,
        "dot-notation": e,
        eqeqeq: e,
        "no-else-return": e,
        "no-eq-null": e,
        "no-extra-bind": e,
        "no-lone-blocks": e,
        "no-useless-call": e,
        "no-useless-return": e,
        "no-void": e,
        "no-with": e,
        radix: e,
        yoda: e,

        // Variables
        "no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "all",
                argsIgnorePattern: "(^__|^h$)"
            }
        ],

        "no-unused-expressions": e,

        // Stylistic Issues
        "comma-dangle": e,
        indent: ["warn", 4],
        "max-len": [
            "warn",
            {
                code: 80,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        "one-var": ["warn", { let: "never", const: "never" }],
        "quote-props": ["warn", "as-needed"],
        quotes: ["warn", "double", { avoidEscape: true }],
        semi: ["warn", "always"],
        "spaced-comment": [
            "warn",
            "always",
            {
                block: { balanced: true }
            }
        ],
        "no-multi-spaces": [
            "warn",
            {
                exceptions: {
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        "space-in-parens": ["warn", "never"],
        "object-curly-spacing": ["warn", "always"],
        "keyword-spacing": "warn",
        "comma-spacing": "warn",
        "key-spacing": "warn",
        "semi-spacing": "warn",
        "func-call-spacing": "warn",
        "space-before-function-paren": ["warn", "never"],

        // ECMAScript 6
        "arrow-body-style": e,
        "arrow-parens": [e, "as-needed"],
        "arrow-spacing": e,
        "no-useless-computed-key": e,
        "no-useless-rename": e,
        "no-var": e,
        "object-shorthand": [e, "always"],
        "prefer-arrow-callback": e,
        "prefer-const": [e, { destructuring: "any" }],
        "prefer-destructuring": e,
        "prefer-template": e
    }
};
