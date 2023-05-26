const path = require('path');

const paths = require('../../shared/config/paths');

// Assert this just to be safe.
if (process.env.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  mode: 'production',
  target: 'node',
  entry: path.resolve(__dirname, '../bin/start.ts'),
  externals: {
    'geoip-country': 'node-commonjs geoip-country',
  },
  resolve: {
    extensions: ['.cjs', '.mjs', '.js', '.ts', '.json'],
    alias: {
      '@server': path.resolve(__dirname, '..'),
      '@shared': path.resolve(__dirname, '../../shared'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          context: path.resolve(__dirname, '..'),
        },
      },
      {
        test: /\.m?js$/,
        parser: {amd: false},
        use: {
          loader: '@vercel/webpack-asset-relocator-loader',
          options: {
            outputAssetBase: 'data',
            production: true, // optional, default is undefined
          },
        },
      },
    ],
  },
  output: {
    path: paths.dist,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: false,
  },
  ignoreWarnings: [
    {
      module: /node_modules\/yargs/,
    },
  ],
};
