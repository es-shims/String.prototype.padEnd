'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

module.exports = function shimPadRight() {
	var polyfill = getPolyfill();

	define(
		String.prototype,
		{ padRight: polyfill },
		{ padRight: function () { return String.prototype.padRight !== polyfill; } }
	);
	return polyfill;
};
