// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = {
  mode: 'development',
  entry: './src/server.ts',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
        options: {
          configFile: 'tsconfig.json',
        }
      },
    ],
  },
  resolve: {
    plugins: [new TsConfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js'],
  },
}