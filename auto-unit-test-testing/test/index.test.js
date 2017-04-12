import Index from '../src/index'
console.log('开始测试')
decribe('index.js的测试', function () {
	it('1应该是数字', function() {
		Index.isNum(1).should.equal(true)
	})
	it('1应该是字符', function() {
		Index.isString('1').should.equal(true)
	})
})