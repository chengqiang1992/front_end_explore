require('./a.js');
require.ensure(['./b.js'], function(require){
	require('./c.js');
	console.log('done!');
});