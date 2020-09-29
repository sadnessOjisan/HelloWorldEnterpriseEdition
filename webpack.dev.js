const wm = require("webpack-merge");
const common = require("./webpack.common");
const outputPath = require("./webpack.common").outputPath;

module.exports = wm.merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: outputPath,
  },
});
