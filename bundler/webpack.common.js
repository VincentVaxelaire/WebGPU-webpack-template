const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/script.ts'),
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      querystring: false,
      symlinks: false,
    },
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map',
  plugins: [
      new CopyWebpackPlugin({
        patterns: [{ 
          from: path.resolve(__dirname, '../static') 
        }]
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
          minify: true
      }),
      new MiniCSSExtractPlugin()
    ],
  module: {
    rules: [
      // HTML
      {
        test: /\.(html)$/,
        use: [ 'html-loader' ]
      },

      // TS
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [ 'ts-loader' ]
      },

      // CSS
      {
        test: /\.css$/,
        use: [ MiniCSSExtractPlugin.loader, 'css-loader' ]
      },

      // Images
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]'
        }
      },
    ]
  }
}
