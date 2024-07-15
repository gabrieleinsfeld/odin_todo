
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: '/Users/gabrielsoares/repos/odin_todo/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  },
  
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    
}),
  new NodePolyfillPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};