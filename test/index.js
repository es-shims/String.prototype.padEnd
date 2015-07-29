'use strict';

var padRight = require('../');
var test = require('tape');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st.throws(function () { padRight(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st.throws(function () { padRight(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	require('./tests')(padRight, t);

	t.end();
});
