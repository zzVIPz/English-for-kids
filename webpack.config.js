const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: {
      index: ['./src/index.js', './src/sass/style.scss'],
      main: ['./src/pages/main.js', './src/sass/main.scss'],
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: './src/js/[name].js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        filename: 'pages/main.html',
        template: 'src/pages/main.html',
        chunks: ['main'],
      }),
      new MiniCssExtractPlugin({
        filename: 'src/css/[name].css',

      }),
    ],
  };

  return config;
};
