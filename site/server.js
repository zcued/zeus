const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const port = 3001;

new WebpackDevServer(webpack({
  mode: 'development',
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'awesome-typescript-loader'
        ]
      }
    ]
  }
}), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(port, 'localhost', error => {
  if (error) {
    throw error;
  }
});
