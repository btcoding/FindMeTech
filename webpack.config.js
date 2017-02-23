var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
        path: path.join(__dirname, '/dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
          }
        ],
      },
    ]
  }
};
