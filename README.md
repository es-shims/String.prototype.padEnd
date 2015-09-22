# String.prototype.padRight <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

An ES7 spec-compliant `String.prototype.padRight` shim. Invoke its "shim" method to shim `String.prototype.padRight` if it is unavailable.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec proposal](https://github.com/ljharb/proposal-string-pad-left-right).

Most common usage:
```js
var padRight = require('string.prototype.padright');

assert(padRight('foo', 5, 'bar') === 'fooba');

padRight.shim();

assert(padRight('foo', 2) === 'foo'.padRight(2));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/string.prototype.padright
[npm-version-svg]: http://vb.teelaun.ch/es-shims/String.prototype.padRight.svg
[travis-svg]: https://travis-ci.org/es-shims/String.prototype.padRight.svg
[travis-url]: https://travis-ci.org/es-shims/String.prototype.padRight
[deps-svg]: https://david-dm.org/es-shims/String.prototype.padRight.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.padRight
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.padRight/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.padRight#info=devDependencies
[testling-svg]: https://ci.testling.com/es-shims/String.prototype.padRight.png
[testling-url]: https://ci.testling.com/es-shims/String.prototype.padRight
[npm-badge-png]: https://nodei.co/npm/string.prototype.padright.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/string.prototype.padright.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/string.prototype.padright.svg
[downloads-url]: http://npm-stat.com/charts.html?package=string.prototype.padright
