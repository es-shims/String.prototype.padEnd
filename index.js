'use strict';

var callBind = require('call-bind');
var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2022/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind.apply(implementation);

var boundPadRight = function padRight(str, maxLength) {
	RequireObjectCoercible(str);
	var args = [maxLength];
	if (arguments.length > 2) {
		args.push(arguments[2]);
	}
	return bound(str, args);
};

define(boundPadRight, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundPadRight;
