function determineDate() {
	import('moment')
		.then(moment => moment().format('LLLL'))
		.then(str => console.log(str))
		.then(err => console.log('Failed to load oment'), err);
}

determineDate();