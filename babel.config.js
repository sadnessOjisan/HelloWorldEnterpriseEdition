module.exports = {
  // TODO: preset を全部pluginにバラす
  plugins: [
    ["@babel/plugin-transform-typescript", { isTSX: true }],
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-react-display-name",
    "@babel/plugin-transform-react-jsx-self",
    "@babel/plugin-transform-react-jsx-source",
  ],
  presets: ["@babel/env"],
};
