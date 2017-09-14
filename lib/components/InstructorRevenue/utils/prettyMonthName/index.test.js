'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('converts date strings (yyyy-mm-dd) into abbreviated month names', function () {
  expect((0, _2.default)('2017-01-01')).toBe('Jan');
  expect((0, _2.default)('2017-03-01')).toBe('Mar');
  expect((0, _2.default)('2025-10-01')).toBe('Oct');
});