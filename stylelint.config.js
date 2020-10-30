module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    "selector-nested-pattern": "^&",
    indentation: 2,
    "selector-max-specificity": "0,2,0",
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": null,
    "max-line-length": 80,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use",
          "include",
          "mixin",
        ],
      },
    ],
  },
};
