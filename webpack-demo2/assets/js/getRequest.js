// jQuery ajax函数二次封装
(function($) {
	$.fn.getRequest = function(options, successCallback) {
		var settings = $.extend({
			'base_url': 'https://mb.yoosh.tv/songpk1',
			// 'base_url': 'http://127.0.0.1:8080',
			'url': options.url || '',
			'type': options.type || 'GET',
			'data': options.data || {},
			'dataType': options.dataType || 'json',
			'async': options.async || 'false',
			'crossDomain': options.crossDomain || 'true',
			'contentType': options.contentType || 'application/x-www-form-urlencoded',
			'successCallback': options.successCallback || function(data){
				if (data.status) {
					console.log('success')
				} else {
					console.log('error')
				}
			},
			'errorCallback': options.errorCallback || function (data) {
				/*console.error('请求成功失败');*/
				/*data.status;//错误状态吗*/
				if (data.status === 404) {
					console.log('请求失败，请求未找到')
				} else if (data.status == 503) {
					console.log('请求失败，服务器内部错误')
				} else {
					console.log('请求失败,网络连接超时')
				}
			}
		}, options)


		// 发起请求
		$.ajax({
			url: settings.base_url+''+settings.url,
			type: settings.type,
			data: settings.data,
			dataType: settings.dataType,
			async: settings.async,
			crossDomain: settings.crossDomain,
			contentType: settings.contentType,
			success: function(data) {
				settings.successCallback(data);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log('2222222');
				settings.errorCallback;
			}
		})
	}

}(jQuery))

