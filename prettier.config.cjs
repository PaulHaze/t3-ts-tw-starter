/** @type {import("prettier").Config} */
const config = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
