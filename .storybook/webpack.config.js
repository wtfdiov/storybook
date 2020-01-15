const { resolve } = require("path");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = async ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        include: [resolve(__dirname, "../src")],
        use: [
          require.resolve("ts-loader"),
          require.resolve("react-docgen-typescript-loader")
        ]
      },
      {
        test: /\.stories\.mdx$/,
        exclude: [/node_modules/],
        include: [resolve(__dirname, "../src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["@babel/plugin-transform-react-jsx"]
            }
          },
          {
            loader: "@mdx-js/loader",
            options: {
              compilers: [createCompiler({})]
            }
          }
        ]
      },
      {
        test: /\.stories\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/],
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: {
              parser: "typescript",
              injectParameters: true
            }
          }
        ],
        enforce: "pre"
      }
    ]
  },
  plugins: config.plugins,
  resolve: {
    ...config.resolve,
    modules: [...config.resolve.modules, resolve(__dirname, "../src")],
    extensions: [
      ...config.resolve.extensions,
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".mdx"
    ]
  }
});
