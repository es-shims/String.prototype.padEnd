'use strict';

var padRight = require('../');
padRight.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var bind = require('function-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

test('shimmed', function (t) {
	t.equal(String.prototype.padRight.length, 1, 'String#padRight has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.padRight.name, 'padRight', 'String#padRight has name "padRight"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'padRight'), 'String#padRight is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad string/this value', { skip: !supportsStrictMode }, function (st) {
		st.throws(function () { return padRight(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st.throws(function () { return padRight(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	require('./tests')(bind.call(Function.call, String.prototype.padRight), t);

	t.end();
});
