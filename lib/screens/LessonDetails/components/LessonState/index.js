'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paragraph = require('../../../../components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _lessonStates = require('../../../../utils/lessonStates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var lesson = _ref.lesson;

  var statusColor = _lessonStates.detailsByLessonState[lesson.state].color;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: '\n        mb3 ttu tc pv2 ph3 br2 ba b--dashed dib\n        ' + statusColor + ' b--' + statusColor + '\n      ' },
      _lessonStates.detailsByLessonState[lesson.state].title || lesson.state
    ),
    _react2.default.createElement(
      _Paragraph2.default,
      null,
      _lessonStates.detailsByLessonState[lesson.state].description
    )
  );
};