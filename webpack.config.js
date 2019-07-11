const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const modName = 'js-combine';

module.exports = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    filename: `${modName}.js`,
    library: modName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    // libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
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
