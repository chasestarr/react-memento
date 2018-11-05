const path = require('path');

module.exports = {
  entry: './index.js',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-memento.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
