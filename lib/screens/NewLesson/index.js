'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RequestedLessons = require('../../components/RequestedLessons');

var _RequestedLessons2 = _interopRequireDefault(_RequestedLessons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewLesson = function NewLesson(_ref) {
  var instructor = _ref.instructor,
      lessonsUrl = _ref.lessonsUrl,
      technologiesUrl = _ref.technologiesUrl;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_RequestedLessons2.default, {
      instructor: instructor,
      lessonsUrl: lessonsUrl,
      technologiesUrl: technologiesUrl
    })
  );
};

NewLesson.propTypes = {
  instructor: _react.PropTypes.object.isRequired,
  lessonsUrl: _react.PropTypes.string.isRequired
};

exports.default = NewLesson;