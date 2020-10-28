module.exports = {
  // TODO: preset を全部pluginにバラす
  plugins: [
    ["@babel/plugin-transform-typescript", { isTSX: true }],
    "@babel/plugin-transform-react-jsx",
  ],
  presets: ["@babel/env"],
};
