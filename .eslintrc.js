module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },    
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["warn", "always"],
        "complexity": ["warn", 4]
        // "quotes": ["warn", "double"]
    }
};
