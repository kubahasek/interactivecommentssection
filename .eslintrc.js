module.exports = {
  extends: ["wesbos"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
    quotes: ["error", "double"],
    "react/prop-types": "off",
  },
};
