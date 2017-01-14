
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const createConfig = require('./createConfig')

module.exports = createConfig({
  outputFilename: 'bundle.js',
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['build'] }
    })
  ]
})
