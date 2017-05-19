const path = require('path')
const webpack = require('webpack')

// PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DEBUG = !(process.env.NODE_ENV === 'production')

const config = {
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,

  entry: {
    app: './src/index.js',
    vendor: [
      'react',
      'react-dom',
    ],
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['es2015', { modules: false }],
            'react',
            'stage-2',
          ],
        },
      },
    }, {
      test: /\.(css|scss|sass)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.(jpg|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }],
    }],
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    // new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  // WEBPACK-DEV-SERVER
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: {
      index: '/',
    },
  },
}

module.exports = config
