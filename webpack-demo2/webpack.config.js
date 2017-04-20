var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	// entry: './app/index.js',

	// CommonsChunkPlugin
	// entry: {
	// 	main: './app/index.js',
	// 	vendor: 'moment'
	// },

	// 隐式公共 vendor chunk
	// entry: {
	// 	main: './app/index.js'
	// },

	// Manifest 文件
	entry: {
		main: './app/index.js',
		vendor: 'moment'
	},

	output: {
		// filename: 'bundle.js',
		filename: '[chunkhash].[name].js',
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
		// new ExtractTextPlugin("[name].styles.[id].[contenthash].css", {allChunks: true}),


		// CommonsChunkPlugin
		// new webpack.optimize.CommonsChunkPlugin({
  //           name: 'vendor' // 指定公共 bundle 的名字。
  //       })

  		// 隐式公共 vendor chunk
  		// new webpack.optimize.CommonsChunkPlugin({
  		// 	name: 'vendor',
  		// 	minChunks: function (module) {
  		// 		// 该配置假定你引入的vendor存在于 node_modules 目录中
  		// 		return module.context && module.context.indexOf('node_modules') !== -1;
  		// 	}
  		// })

  		// Manifest 文件
  		new webpack.optimize.CommonsChunkPlugin({
  			names: ['vendor', 'manifest']		// 指定公共 bundle 的名字
  		}),

  		// JS文件压缩
  		// new webpack.optimize.UglifyJsPlugin({
  		// 	sourceMap: options.devtool && (options.devtool.indexOf("sourceMap") >= 0 options.devtool.indexOf("source-map") >= 0)
  		// })
	]
};