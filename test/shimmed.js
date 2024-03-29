'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.padEnd.length, 1, 'String#padEnd has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.padEnd.name, 'padEnd', 'String#padEnd has name "padEnd"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'padEnd'), 'String#padEnd is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad string/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return String.prototype.padEnd.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return String.prototype.padEnd.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(String.prototype.padEnd), t);

	t.end();
});
