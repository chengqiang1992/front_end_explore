var path = require('path');

module.exports = {
	entry: './app/index-es2015.js',
	output: {
		filename: 'es2015.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [['es2015', {modules: false}]],
					plugins: ['syntax-dynamic-import']
				}
			}]
		}]
	}
};