var path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			// {test: /\.css$/, loader: 'css-loader'},

			// or equivalently
			// {test: /\.css$/, use: 'css-loader'},

			// or equivalently
			// {test: /\.css$/, use: {
			// 	loader: 'css-loader',
			// 	options: {}
			// }},

			// Via webpack.config.js
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							module: true
						}
					}
				]
			},

			{test: /\.ts$/, use: 'ts-loader'}
		]
	}
};

// module.exports = function(env) {
// 	return {
// 		entry: './app/index.js',
// 		output: {
// 			filename: '[name].[chunkhash].js',
// 			path: path.resolve(__dirname, 'dist')
// 		}
// 	}
// }