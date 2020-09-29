const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
