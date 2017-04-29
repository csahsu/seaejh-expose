'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['latest', 'es2015', 'react']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react']
         }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]',
      },
      {
        test: /\.svg.*/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]',
      },
      {
        test: /\.woff.*/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf.*/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]',
      },
      {
        test: /\.eot.*/,
      loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]',
      },
      {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  }
}




