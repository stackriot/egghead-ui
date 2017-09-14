'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('adds question mark but no ampersands for only one param', function () {
  return expect((0, _2.default)({ answer: 42 })).toBe('?answer=42');
});

test('adds ampersands between multiple params', function () {
  return expect((0, _2.default)({ answer: 42, lucky: 7 })).toBe('?answer=42&lucky=7');
});

test('creates comma-separated lists for arrays', function () {
  return expect((0, _2.default)({ alphabet: ['a', 'b', 'c'] })).toBe('?alphabet=a,b,c');
});