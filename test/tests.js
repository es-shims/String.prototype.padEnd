'use strict';

module.exports = function (padRight, t) {
	t.test('normal cases', function (st) {
		st.equal(padRight('a', 3, 'b'), 'abb', 'string pads right with single character');
		st.equal(padRight('abc', 3, 'd'), 'abc', 'string already of maximum length noops');
		st.equal(padRight('abc', -3, 'd'), 'abc', 'string already larger than maximum length noops');
		st.equal(padRight('cd', 3, 'ab'), 'cda', 'string with maximum length equal to length plus filler length, pads');
		st.equal(padRight('abc'), 'abc', 'absent maximum length is noop');
		st.equal(padRight('a', 3), 'a  ', 'absent fillStr defaults to a space');
		st.equal(padRight('ed', 6, null), 'ednull', 'non-string fillStr gets stringified');

		st.end();
	});

	t.test('truncated fill string', function (st) {
		st.equal(padRight('a', 2, 'bc'), 'ab', 'truncates at the provided max length');

		st.end();
	});

	t.test('exceptions', function (st) {

		st.end();
	});
};
