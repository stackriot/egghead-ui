'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('all steps are incomplete when instructor has no lessons', function () {
  var instructorLessonStates = [];
  expect((0, _2.default)(instructorLessonStates, 'submitted')).toBe(false);
  expect((0, _2.default)(instructorLessonStates, 'approved')).toBe(false);
});

test('all steps are complete when instructor has at least one published lesson', function () {
  var instructorLessonStates = ['submitted', 'approved', 'published'];
  expect((0, _2.default)(instructorLessonStates, 'submitted')).toBe(true);
  expect((0, _2.default)(instructorLessonStates, 'updated')).toBe(true);
  expect((0, _2.default)(instructorLessonStates, 'approved')).toBe(true);
  expect((0, _2.default)(instructorLessonStates, 'published')).toBe(true);
});

test('steps that are less than or equal to a completed step are also complete', function () {
  var instructorLessonStates = ['approved'];
  expect((0, _2.default)(instructorLessonStates, 'submitted')).toBe(true);
  expect((0, _2.default)(instructorLessonStates, 'approved')).toBe(true);
  expect((0, _2.default)(instructorLessonStates, 'published')).toBe(false);
});