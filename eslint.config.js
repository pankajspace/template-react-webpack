module.exports = [{
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
  },
  plugins: {
    "react": {
      version: "detect"
    }
  },
  rules: {
    "semi": ["error", "always"], // Enforce semicolons at the end of statements
  },
}];