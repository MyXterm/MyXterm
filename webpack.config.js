/**
 * Created by eatong on 17-3-12.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool:'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  mode:'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // add this line
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      { test: /node_modules.+xterm.+\.map$/, loader: 'ignore-loader' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  target: 'electron-renderer'
};
