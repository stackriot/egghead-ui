'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('sorts lessons by the lesson state flow order', function () {
  return expect((0, _2.default)([{ state: 'claimed' }, { state: 'published' }, { state: 'retired' }, { state: 'published' }, { state: 'published' }, { state: 'accepted' }, { state: 'approved' }, { state: 'published' }])).toEqual([{ state: 'accepted' }, { state: 'claimed' }, { state: 'approved' }, { state: 'published' }, { state: 'published' }, { state: 'published' }, { state: 'published' }, { state: 'retired' }]);
});