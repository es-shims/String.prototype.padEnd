'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof String.prototype.padRight === 'function' ? String.prototype.padRight : implementation;
};
