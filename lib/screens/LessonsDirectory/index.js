'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('../../components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _LessonOverviewsByGroup = require('../../components/LessonOverviewsByGroup');

var _LessonOverviewsByGroup2 = _interopRequireDefault(_LessonOverviewsByGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LessonsDirectory = function LessonsDirectory(_ref) {
  var lessonsUrl = _ref.lessonsUrl;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { level: '5' },
      'All Lessons'
    ),
    _react2.default.createElement(_LessonOverviewsByGroup2.default, { lessonsUrl: lessonsUrl })
  );
};

LessonsDirectory.propTypes = {
  lessonsUrl: _react.PropTypes.string.isRequired
};

exports.default = LessonsDirectory;