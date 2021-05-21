var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'index.js',
    library: 'repro',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ]
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".json", "JSON"]
  },
}