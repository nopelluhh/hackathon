/* from https://github.com/preboot/angularjs-webpack */
'use strict'

// Modules
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event
const isTest = ENV === 'test' || ENV === 'test-watch'
const isProd = ENV === 'build'

module.exports = (() => {
  process.traceDeprecation = true
  const config = {}

  config.entry = isTest
    ? void 0
    : {
      // app: './public/modules/main.js'
      app: [

        // For hot style updates
        'webpack/hot/dev-server',

        // The script refreshing the browser on none hot updates
        'webpack-dev-server/client?http://localhost:8080',

        // Our application
        './public/modules/main.js'
      ]
    }

  config.resolve = {
    modules: [
      path.resolve(__dirname, 'public'),
      'node_modules'
    ]
  }
  config.output = isTest
    ? {}
    : {
      // Absolute output directory
      path: path.join(__dirname, '/public/dist'),

      // Output path from the view of the page Uses webpack-dev-server in development
      publicPath: isProd
        ? '/'
        : '/public/dist/',

      // Filename for entry points Only adds hash in build mode
      filename: isProd
        ? '[name].[hash].js'
        : '[name].bundle.js',

      // Filename for non-entry points Only adds hash in build mode
      chunkFilename: isProd
        ? '[name].[hash].js'
        : '[name].bundle.js'
    }

  if (isTest) {
    config.devtool = 'inline-source-map'
  } else if (isProd) {
    config.devtool = 'source-map'
  } else {
    // config.devtool = 'eval-source-map'
  }

  config.module = {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      }, {
        test: /\.[s]?css$/,
        use: isTest
          ? 'null-loader'
          : ExtractTextPlugin.extract({
            // fallback: 'style-loader',
            filename: 'styles/main.css',
            use: [
              {
                loader: 'css-loader',
                query: {
                  sourceMap: true
                }
              }, {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [path.resolve(__dirname, './node_modules')]
                }
              }
            ]
          })
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }

  if (isTest) {
    config
      .module
      .rules
      .push({
        enforce: 'pre',
        test: /\.js$/,
        exclude: [
          /node_modules/, /\.spec\.js$/
        ],
        loader: 'istanbul-instrumenter-loader',
        query: {
          esModules: true
        }
      })
  }

  config.plugins = [new webpack.HotModuleReplacementPlugin()]

  // Skip rendering index.html in test mode
  if (!isTest) {
    config
      .plugins
      .push(new HtmlWebpackPlugin({template: './public/index.html', inject: 'body'}), new ExtractTextPlugin({
        filename: 'css/[name].css',
        // disable: !isProd,
        allChunks: true
      }))
  }

  // Add build specific plugins
  if (isProd) {
    config
      .plugins
      .push(
      // Only emit files when there are no errors
      new webpack.NoEmitOnErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin(),

      // Copy assets from the public folder Reference:
      // https://github.com/kevlened/copy-webpack-plugin
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '/public')
        }
      ]))
  }

  return config
})()
