'use strict';

const path                = require('path');
const webpack             = require('webpack');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const dotenv              = require('dotenv');

dotenv.config();

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}


const config = {
  entry: './src/index',
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name]-[hash].js' : '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/i, loaders: ['babel-loader'], include: [ path.resolve(__dirname, './src') ] }
    ]
  },
  externals: {
    daum: 'daum'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      env: process.env,
      minify: {
        removeComments: true,
        collapseBooleanAttributes: true
      }
    })
  ],
  devServer: {
    historyApiFallback: false
  }
};



if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  config.plugins.push(new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
    moduleFilenameTemplate: 'webpack:///[resourcePath]',
    fallbackModuleFilenameTemplate: 'webpack:///[resourcePath]?[hash]',
    module: true,
    columns: true
  }));
  config.htmlLoader.root = __dirname;
}

module.exports = exports = config;
