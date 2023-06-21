const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    Task: './src/Task.js',
    Project: './src/Project.js',
    ProjectList: './src/ProjectList.js',
    StorageHandler: './src/StorageHandler.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To-Do List',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};