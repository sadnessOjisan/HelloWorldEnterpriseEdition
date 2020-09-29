const wm = require("webpack-merge");
const common = require("./webpack.common");

module.exports = wm.merge(common, {
  mode: "production",
});
