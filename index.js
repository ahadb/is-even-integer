
/**
 * Tests if a value is even
 * @param {number} number
 * @return {boolean}
 */

const isEven = n => {

	  if( n == '' ) {
			return false;
		}
		if( Number.isNaN( n ) ) {
			return false;
		}
	  if( n == undefined ) {
			return false;
		}
	  if( n === Number.POSITIVE_INFINITY || n === !Number.NEGATIVE_INFINITY ) {
			return false;
		}
	  if( n === true || n === false ) {
			return false;
		}

	  return n % 2 === 0;
};

exports.isEven = isEven;

