const expect = require('chai').expect;

const even = require('../index');


describe('#isEven', function() {
	it('should return true', function() {
		const result = even(2);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = even(120000);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = even(5e10);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = even(-2);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = even(-450);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = even(-7e3);
		expect(result).to.be.true;
	});

	it('should return false', function() {
		const result = even(Number.POSITIVE_INFINITY);
		expect(result).to.be.false;
	});

	it('should return false', function() {
		const result = even(Number.NEGATIVE_INFINITY);
		expect(result).to.be.false;
	});

	it('should return false', function() {
		const result = even(NaN);
		expect(result).to.be.false;
	})

	it('should return false', function() {
		const result = even('string');
		expect(result).to.be.false;
	})

	it('should return false', function() {
		const result = even(undefined);
		expect(result).to.be.false;
	})

	it('should return false', function() {
		const result = even(true);
		expect(result).to.be.false;
	})
});