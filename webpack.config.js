'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

module.exports = function (env = {}, argv) {
  return {
    entry: ['babel-polyfill', path.join(__dirname, 'src/index.js')],
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: 'assets/app.[hash].js'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            formatter: eslintFriendlyFormatter,
            fix: true
          }
        },
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.css/,
          exclude: [/node_modules/],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.css/,
          include: [/node_modules/],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.(jpg|jpeg|png|webp|svg)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'assets/images',
                publicPath: '/assets/images',
                limit: 8192
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'assets/fonts',
                publicPath: '/assets/fonts',
                limit: 8192
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        '@app': path.resolve(__dirname, 'src/'),
        '@actions': path.resolve(__dirname, 'src/actions/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@containers': path.resolve(__dirname, 'src/containers/'),
        '@constants': path.resolve(__dirname, 'src/constants/'),
        '@reducers': path.resolve(__dirname, 'src/reducers/'),
        '@shapes': path.resolve(__dirname, 'src/shapes/'),
        '@utils': path.resolve(__dirname, 'src/utils/')
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name].[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true
        }
      })
    ],
    devServer: {
      inline: false,
      historyApiFallback: true
    }
  }
}
