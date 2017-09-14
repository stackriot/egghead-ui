'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _reactRouterDom = require('react-router-dom');

var _Heading = require('../../../../../../../../components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Avatar = require('../../../../../../../../components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _LessonGroupsStat = require('./components/LessonGroupsStat');

var _LessonGroupsStat2 = _interopRequireDefault(_LessonGroupsStat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var instructor = _ref.instructor;


  if (!instructor) {
    return null;
  }

  var lessonOverviewsByGroupStats = [{
    label: 'In Progress',
    count: instructor.claimed_lessons
  }, {
    label: 'In Review',
    count: instructor.submitted_lessons
  }, {
    label: 'In Queue',
    count: instructor.approved_lessons
  }, {
    label: 'Published',
    count: instructor.published_lessons
  }];

  return _react2.default.createElement(
    'div',
    { className: 'pa4 flex flex-wrap items-center justify-between' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      {
        to: '/instructors/' + instructor.slug,
        className: 'pointer dim'
      },
      _react2.default.createElement(
        'div',
        { className: 'flex items-center mr3' },
        _react2.default.createElement(
          'div',
          { className: 'mr3' },
          _react2.default.createElement(_Avatar2.default, {
            name: instructor.first_name,
            url: instructor.avatar_url
          })
        ),
        _react2.default.createElement(
          _Heading2.default,
          { level: '3' },
          instructor.full_name
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: 'flex flex-wrap' },
      (0, _lodash.map)(lessonOverviewsByGroupStats, function (group) {
        return _react2.default.createElement(
          'div',
          {
            key: group.label,
            className: 'mt3 mr3'
          },
          _react2.default.createElement(_LessonGroupsStat2.default, {
            label: group.label,
            count: group.count
          })
        );
      })
    )
  );
};