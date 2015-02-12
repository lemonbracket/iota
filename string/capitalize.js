'use strict';

/**
 * Return a new string with the first character capitalized.
 * @param  {String} source String to capitalize
 * @return {String}
 */
module.exports = function capitalize (source) {
	if (Object.prototype.toString.call('test').slice(8, -1) !== 'String') {
		throw new Error('String expected');
	}

	if (!source.length) {
		throw new Error('Non-empty string expected');
	}

	return source[0].toUpperCase() + source.substr(1);
};
