'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('first day of the month', function () {
  var realDate = Date;
  Date = function Date() {
    return new realDate('05/24/2013');
  };
  expect((0, _2.default)()).toBe('2013-05-01');
  Date = realDate;
}); /* eslint-disable no-native-reassign */