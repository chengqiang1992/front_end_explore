var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{loader: 'style-loader'},
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				module: true
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'css-loader'
				})
			},
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin.extract("style-loader", ["css-loader"])
			// }
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		// new ExtractTextPlugin("[name].styles.[id].[contenthash].css", {allChunks: false}),
		// new ExtractTextPlugin("[name].styles.[id].[contenthash].css", {allChunks: true})
	]
};