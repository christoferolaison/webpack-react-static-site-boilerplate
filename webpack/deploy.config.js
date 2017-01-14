
const webpack = require('webpack')
const createConfig = require('./createConfig')

module.exports = createConfig({
  outputFilename: '[hash].bundle.js',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ],
})
