import _ from 'lodash'
import '../assets/css/base.css'
var moment = require('moment');

console.log(moment().format());
console.log('moment().format()');

function component () {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', ' webpack'], '');

	return element;
}

document.body.appendChild(component());

// 测试 多文件按需加载
// let hello = null;
// require.ensure([], function(require) {
// 	hello = require('./hello').default
// })

// document.getElementById("hello").addEventListener("click", function( event ) {
//     alert('hello');
//     hello();
//  });
