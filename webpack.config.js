var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
       loaders: [{
           test: /.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
             presets: ['es2015', 'react']
           }
       }]
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: HtmlWebpackTemplate,
      title: 'React Redux Demo',
      appMountId: 'root', // Generate #app where to mount
      mobile: true, // Scale page on mobile
      inject: false, // html-webpack-template requires this to work
    }),
  ],
};
