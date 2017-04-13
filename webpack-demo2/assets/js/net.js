// 升序排列参数 -- 可以优化，目前使用的是冒泡排序 -- 注意越界
var handlerNet = function () {
	var welcome_word = {
		'first': 'Hello',
		'second': 'welcome',
		'three': '红岸基地'
	}
	var welcome = function() {
		if (welcome_word) {
			console.log(welcome_word.first + ' ' + welcome_word.second + ' ' + welcome_word.three)
		}
	}
	return {
		// 初始化
		init: function() {
			welcome();
		},

		// 对参数进行排序
		sortParams: function(array) {
			var oneKey, twoKey, temp;
			for (var t = array.length; t > 0; t--) {
				for (var i = 0; i < t - 1; i++) {
					oneKey = array[i].key;
					twoKey = array[i+1].key;

					var len_one = oneKey.length;
					var len_two = twoKey.length;
					var len = len_one > len_two ? len_two : len_one;

					// 字符串比较大小
					for (var j = 0; j < len; j++) {
						if (oneKey.charAt(j) == twoKey.charAt(j)) {
							// 前面字符都相等的话，长度短排前面
							if (j == len - 1) {
								if (len_one > len_two) {
									temp = array[i];
									array[i] = array[i + 1];
									array[i + 1] = temp;
									break;
								}
							}
							continue;	// 相等的跳过，不用比较
						}

						// 交换参数位置
						if (oneKey.charAt(j) > twoKey.charAt(j)) {
							temp = array[i];
							array[i] = array[i + 1];
							array[i + 1] = temp;

							break;
						}
						break;
					}
				}
			}
			return array;
		},

		// 获取 URL 参数，将得到的参数以键值对形式存在args中返回。
		getURLParameter: function() {
			var args = new Object();

			var searchString = window.location.search.substring(1),
				i, val, params = searchString.split("&");

				for (var i = 0; i < params.length; i++) {
					val = params[i].split('=');

					if (val == -1) continue;

					var arg_name = val[0]
					var arg_value = val[1];
					args[arg_name] = unescape(arg_value)
				}
				return args;
		},

		// getSign
		getSign: function(sorted_params, song_key) {
			var str = '';
			for (var index = 0; index < sorted_params.length; index++) {
				str += sorted_params[index].key + sorted_params[index].value;
			}
			str += song_key;
			return $.md5(str).toUpperCase();
		}
	}
}();

jQuery(document).ready(function function_name(argument) {
	handlerNet.init();
})