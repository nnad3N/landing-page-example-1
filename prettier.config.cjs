/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120,
  plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-tailwindcss")],
  overrides: [
    {
      files: ["*.astro", "*.js", "*.ts", "*.jsx", "*.tsx", "*.mjs", "*.cjs"],
      options: {
        parser: "astro",
      },
    },
  ],
};
