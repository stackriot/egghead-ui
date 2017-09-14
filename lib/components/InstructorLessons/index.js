'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _LessonOverviewsByGroup = require('../LessonOverviewsByGroup');

var _LessonOverviewsByGroup2 = _interopRequireDefault(_LessonOverviewsByGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstructorLessons = function InstructorLessons(_ref) {
  var instructor = _ref.instructor;
  return instructor ? _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { level: '5' },
      instructor.first_name + '\'s Lessons'
    ),
    _react2.default.createElement(_LessonOverviewsByGroup2.default, {
      lessonsUrl: instructor.lessons_url,
      instructor: instructor
    })
  ) : null;
};

InstructorLessons.propTypes = {
  instructor: _react.PropTypes.object
};

exports.default = InstructorLessons;