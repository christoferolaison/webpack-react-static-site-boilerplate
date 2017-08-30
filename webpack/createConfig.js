
const path = require('path')
const StaticSiteGeneratorWebpackPlugin = require('static-site-generator-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = (options) => {
  return {

    entry: {
      main: './src/entry.js',
    },

    output: {
      filename: options.outputFilename,
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
            presets: ['babel-preset-react', 'babel-preset-env', 'babel-preset-stage-2']
          }
        }],
      }],
    },

    plugins: [new StaticSiteGeneratorWebpackPlugin('main', ['/'])].concat(options.plugins)

  };
}
