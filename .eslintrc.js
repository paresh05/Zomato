module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    settings:{
        react: {
            "version":"detect"
        }
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope":"off",
        "react/prop-types":"off",
        "indent":[
            "error",
            2
        ],
        "linebreak-style":[
            "error",
            "unix"
        ],
        "quotes":[
            "error",
            "single"
        ],
        "semi":[
            "error",
            "always"
        ]
    }
}
