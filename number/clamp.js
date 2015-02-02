'use strict';

/**
 * Clamp function
 */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {Number} num The number to clamp
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 */
module.exports = function clamp (num, min, max) {
  return Math.min(Math.max(num, min), max);
};
