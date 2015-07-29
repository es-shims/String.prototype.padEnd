'use strict';

var bind = require('function-bind');
var define = require('define-properties');
var ES = require('es-abstract/es7');
var max = Math.max;
var slice = bind.call(Function.call, String.prototype.slice);

var padRightShim = function padRight(maxLength) {
	var O = ES.RequireObjectCoercible(this);
	var S = ES.ToString(O);
	var stringLength = ES.ToLength(S.length);
	var fillString;
	if (arguments.length > 1) {
		fillString = arguments[1];
	}
	var fillStr = typeof fillString === 'undefined' ? '' : ES.ToString(fillString);
	if (fillStr === '') {
		fillStr = ' ';
	}
	var intMaxLength = max(ES.ToLength(maxLength), stringLength);
	if (intMaxLength <= stringLength) {
		return S;
	}
	var fillLen = intMaxLength - stringLength;
	var stringFiller = '';
	while (stringFiller.length < fillLen) {
		stringFiller += fillStr;
	}
	if (stringFiller.length > fillLen) {
		stringFiller = slice(stringFiller, 0, fillLen);
	}

	return S + stringFiller;
};

var boundPadRightShim = bind.call(Function.apply, padRightShim);

var boundPadRight = function padRight(str, maxLength) {
	ES.RequireObjectCoercible(str);
	var args = [maxLength];
	if (arguments.length > 2) {
		args.push(arguments[2]);
	}
	return boundPadRightShim(str, args);
};
define(boundPadRight, {
	shim: function shimPadRight() {
		define(String.prototype, { padRight: padRightShim });
		return String.prototype.padRight;
	}
});

module.exports = boundPadRight;
