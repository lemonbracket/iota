'use strict';

/**
 * Return a preview of a string with a configurable terminator.
 * @param  {String} source          String to preview
 * @param  {Number} limit           Character limit
 * @param  {Object} opts            Options
 * @param  {String} [opts.truncate] Break on any character, default false
 * @param  {String} [opts.end]      Terminating string, default '...'
 * @return {String}
 */
module.exports = function preview (source, limit, opts) {
	if (Object.prototype.toString.call(source).slice(8, -1) !== 'String') {
		throw new Error('String expected');
	}

	limit = limit || 0;
	opts = opts || {};
	var end = opts.end || '...';

	if (source.length < limit) return source;

	if (opts.truncate) return source.slice(0, limit - end.length) + end;

	var words = source.split(' ');
	var len = words.length;
	var str = '';

	for (var i = 0; i < len; ++i) {
		if (str.length + words[i].length + 1 >= limit - end.length) {
			return str + end;
		} else {
			str += ' ' + words[i];
		}
	}

	return str;
};
