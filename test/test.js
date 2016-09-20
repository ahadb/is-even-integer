const expect = require('chai').expect;

const ie = require('../index');


describe('#isEven', function() {
	it('should return true', function() {
		const result = ie.isEven(2);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = ie.isEven(120000);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = ie.isEven(5e10);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = ie.isEven(-2);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = ie.isEven(-450);
		expect(result).to.be.true;
	});

	it('should return true', function() {
		const result = ie.isEven(-7e3);
		expect(result).to.be.true;
	});

	it('should return false', function() {
		const result = ie.isEven(Number.POSITIVE_INFINITY);
		expect(result).to.be.false;
	});

	it('should return false', function() {
		const result = ie.isEven(Number.NEGATIVE_INFINITY);
		expect(result).to.be.false;
	});

	it('should return false', function() {
		const result = ie.isEven(NaN);
		expect(result).to.be.false;
	})

	it('should return false', function() {
		const result = ie.isEven('string');
		expect(result).to.be.false;
	})

	it('should return false', function() {
		const result = ie.isEven(undefined);
		expect(result).to.be.false;
	})

	it('should return false', function() {
		const result = ie.isEven(true);
		expect(result).to.be.false;
	})
});