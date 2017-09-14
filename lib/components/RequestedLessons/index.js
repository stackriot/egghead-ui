'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _LessonOverviews = require('../LessonOverviews');

var _LessonOverviews2 = _interopRequireDefault(_LessonOverviews);

var _ProposeLesson = require('./components/ProposeLesson');

var _ProposeLesson2 = _interopRequireDefault(_ProposeLesson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestedLessons = function RequestedLessons(_ref) {
  var instructor = _ref.instructor,
      lessonsUrl = _ref.lessonsUrl,
      technologiesUrl = _ref.technologiesUrl;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Heading2.default,
      { level: '5' },
      'Requested Lessons'
    ),
    _react2.default.createElement(
      _Paragraph2.default,
      { type: 'small' },
      'Here\'s some ideas for lessons that you can start recording today. If you claim one of these ideas, you\'ll have 2 weeks to record a draft and upload it. After that it goes back into the pool for others to claim.'
    ),
    _react2.default.createElement(
      'div',
      { className: 'mb3' },
      _react2.default.createElement(
        _Card2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'pa4' },
          _react2.default.createElement(_ProposeLesson2.default, {
            instructor: instructor,
            lessonsUrl: lessonsUrl,
            technologiesUrl: technologiesUrl
          })
        )
      )
    ),
    _react2.default.createElement(_LessonOverviews2.default, {
      states: ['requested'],
      fallback: _react2.default.createElement(
        _Paragraph2.default,
        null,
        'There are no requested lessons, but you can create your own.'
      ),
      lessonsUrl: lessonsUrl
    })
  );
};

RequestedLessons.propTypes = {
  instructor: _react.PropTypes.object.isRequired,
  lessonsUrl: _react.PropTypes.string.isRequired
};

exports.default = RequestedLessons;