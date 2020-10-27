module.exports = {
  // TODO: preset を全部pluginにバラす
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/plugin-transform-react-jsx",
  ],
  presets: ["@babel/env", "@babel/preset-typescript"],
};
