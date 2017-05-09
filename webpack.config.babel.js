import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import OfflinePlugin from 'offline-plugin';

const defaultEnv = {
  dev: true,
  production: false,
};

export default (env = defaultEnv) => ({
  entry: [
    ...env.dev ? [
      'react-hot-loader/patch', // Needed to preserve state
      'webpack-dev-server/client?http://localhost:8080', // webpack dev server host and port
    ] : [],
    path.join(__dirname, 'src/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    ...env.dev ? [
      // Webpack Development Plugins
      new HotModuleReplacementPlugin(),
    ] : [],
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new OfflinePlugin(),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
              plugins: ['react-hot-loader/babel', 'jsx-control-statements'],
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 },
        }],
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  devServer: {
    hot: true,
  },
});
