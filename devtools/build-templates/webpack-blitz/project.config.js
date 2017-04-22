var path = require('path');

var buildFolder = 'build';

module.exports = {
  sourceFolder: path.join(__dirname, 'src'),
  exclude: /node_modules/,
  assetFolder: 'html',
  entry: [ './js/index.js' ],
  outputPath: path.join(__dirname, buildFolder),
  outputFileName: 'bundle.js',
  extractCSS: true,
  serverPort: 8080,
  contentBase: path.join('.', buildFolder),
};
