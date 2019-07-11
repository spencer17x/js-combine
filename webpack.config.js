const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const modName = 'js-combine';

module.exports = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    filename: `${modName}.js`,
    library: modName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.ts?$/, use: ["awesome-typescript-loader", "raw-loader"] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true
    })
  ]
}
