module.exports = {
  stories: ["../**/*.stories.*"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-docs/register"
  ]
};
