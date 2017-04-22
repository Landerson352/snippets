var path = require('path');
var webpack = require('webpack');
var fail = require('webpack-fail-plugin');
var copy = require('copy-webpack-plugin');
var extractText = require('extract-text-webpack-plugin');

var project = require('./project.config');

var isProduction = process.env.NODE_ENV ?
	process.env.NODE_ENV.trim() == 'production' : false;

console.log(__dirname);

var config = {
	context : project.sourceFolder,
	entry : project.entry,
	output : {
		path : project.outputPath,
		filename : project.outputFileName,
	},
	devtool : isProduction ? null : 'source-map',
	devServer : {
		outputPath : project.outputPath,
		contentBase: project.contentBase,
		port : project.serverPort,
  	hot: true,
  	stats: { colors: true },
  	filename: project.outputFileName
	},
	module : {
		loaders : [
			{
		      test: /\.jsx?$/,
		      exclude: project.exclude,
		      loader: 'babel',
		      query: {
		        presets: ['es2015', 'stage-0', 'react', 'react-hmre']
		      }
		    },
			{
				test : /\.less$/,
				loader : project.extractCSS ?
					extractText.extract('style', 'css!less') :
					'style-loader!css-loader!less-loader'
			},
			{
				test: /\.css$/,
				loader: project.extractCSS ?
					extractText.extract('style', 'css') :
					'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg|svg)$/,
				loaders: ['url', 'image-webpack']
			}
		]
	},
	resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less']
	},
	plugins : [
		fail,
		new copy([
			{ from : project.assetFolder, to: project.outputPath },
		]),
	],
	serverPort : project.serverPort
};

if (isProduction) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
	    compress: {
	       warnings: false
	    }
		})
	);
}

if (project.extractCSS) {
	config.plugins.push(new extractText('bundle.css'));
}

module.exports = config;
