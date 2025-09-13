module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-html"],
  overrides: [
    {
      files: ["**/*.astro"],
      customSyntax: "postcss-html",
    },
  ],
  ignoreFiles: ["dist/**", ".astro/**", "node_modules/**", "public/**"],
};
