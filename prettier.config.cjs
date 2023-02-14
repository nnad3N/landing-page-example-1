/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120,
  plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-tailwindcss")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
