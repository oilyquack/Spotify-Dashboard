const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  node: {
    fs: "empty"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "static")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve("babel-loader")
      }
    ]
  }
};
