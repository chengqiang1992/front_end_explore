const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
	context: resolve(__dirname, 'src'),

	entry: [
		'react-hot-loader/patch',
		// active HMR for React

		'webpack-dev-server/client?http://localhost:8080',
		// bundle the client for webpakc-dev-server
		// and connect to the provided endpoing

		'webpack/hot/only-dev-server',
		// bundle the client for the hot reloading
		// only means to only hot reload for successful updates

		'./index.js'
		// the entry point of our app
	],
	output: {
		filename: 'bundle.js',
		// the output bundle

		path: resolve(__dirname, 'dist'),

		publicPath: '/'
		// necessary for HMR to know where to load the hot update chunks
	},
	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		// enable HMR on the server

		contentBase: resolve(__dirname, 'dist'),
		// match the output path

		publicPath: '/'
		// match the output publicPath
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader',],
				exclude: /node_modules/
			},
			{
				test: /\.sass$/,
				use: ['style-loader', 'css-loader?modules', 'sass-loader'],
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally 

		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates

		// new webpack.optimize.uglifyJsPlugin({
		// 	sourceMap: options.devtool && (options.devtool.indexOf("sourceMap") >= 0 || options.devtool.indexOf("source-map") >= 0)
		// })
	]
}