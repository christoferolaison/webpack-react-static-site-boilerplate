
const path = require('path')
const StaticSiteGeneratorWebpackPlugin = require('static-site-generator-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {

  entry: {
    main: './src/entry.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    libraryTarget: 'umd',
  },

  module: {
    rules: [{
      test: /.js$/,
      include: /src/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react', 'babel-preset-latest', 'babel-preset-stage-2']
        }
      }],
    }],
  },

  plugins: [
    new StaticSiteGeneratorWebpackPlugin('main', ['/']),

    // enable browser to reload when file changes.
    // https://github.com/markdalgleish/static-site-generator-webpack-plugin/issues/18
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['build'] }
    })
  ],

}
