var path = require('path');

var buildFolder = 'build';

module.exports = {
  sourceFolder: __dirname,
  exclude: /node_modules|devtools|ui|build/,
  assetFolder: 'html',
  entry: [ './js/index.js' ],
  outputPath: path.join(__dirname, buildFolder),
  outputFileName: 'bundle.js',
  extractCSS: true,
  serverPort: 8080,
  contentBase: path.join('.', buildFolder),
};
