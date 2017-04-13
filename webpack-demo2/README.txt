

webapck 2 demo2

1: 创建初始demo

	1.1： 创建 app/index.js 创建 index.html
		此时采用的是  https://unpkg.com/lodash@4.16.6

	1.2： npm install --save lodash
		在 app/index.js中导入 lodash
		在 index.html 删除 https://unpkg.com/lodash@4.16.6
		删除直接使用的 app/index.js
		导入dist/bundle.js
		在 /node_modules/.bin/ 目录下执行： webpack app/index.js dist/bundle.js

2： 在 webpack 中使用 ES2015 模块
	2.1： 使用 webpack config 文件替代之前的在 /node_modules/.bin/ 目录下执行： webpack app/index.js dist/bundle.js

	注意：此时的 entry路径变为: '../../app/index.js',
	output路径变为dist

	2.2 在npm中使用webpack
	注意：此时的 entry路径变为: './app/index.js',

