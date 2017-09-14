'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _lessonStates = require('../../../../../../utils/lessonStates');

var _hardCodedSizes = require('../../../../../../utils/hardCodedSizes');

var _Maybe = require('../../../../../Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Heading = require('../../../../../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Image = require('../../../../../Image');

var _Image2 = _interopRequireDefault(_Image);

var _Avatar = require('../../../../../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _LessonActions = require('../../../../../LessonActions');

var _LessonActions2 = _interopRequireDefault(_LessonActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var lesson = _ref.lesson,
      requestCurrentPage = _ref.requestCurrentPage;
  return _react2.default.createElement(
    'div',
    { className: 'flex flex-wrap justify-between' },
    _react2.default.createElement(
      'div',
      {
        className: 'pa4 flex',
        style: {
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: _hardCodedSizes.xsmallContainerWidth - 100
        }
      },
      _react2.default.createElement(_Image2.default, {
        src: lesson.technology.logo_http_url,
        alt: lesson.technology.label,
        className: 'w2 h2 mr3'
      }),
      _react2.default.createElement(
        'div',
        { className: 'w-100' },
        _react2.default.createElement(
          'div',
          { className: 'mb3 ttu b' },
          _lessonStates.detailsByLessonState[lesson.state].title || lesson.state
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: '/lessons/' + lesson.slug,
            className: 'db pointer dim no-underline base'
          },
          _react2.default.createElement(
            _Heading2.default,
            { level: '3' },
            lesson.title
          )
        ),
        _react2.default.createElement(
          _Maybe2.default,
          { condition: lesson.state !== 'requested' },
          _react2.default.createElement(
            'div',
            { className: 'mt3' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                to: '/instructors/' + lesson.instructor.slug,
                className: 'pointer dim no-underline dark-gray-secondary'
              },
              _react2.default.createElement(
                'div',
                { className: 'flex items-center' },
                _react2.default.createElement(_Avatar2.default, {
                  name: lesson.instructor.full_name,
                  url: lesson.instructor.avatar_url,
                  size: '2'
                }),
                _react2.default.createElement(
                  'div',
                  { className: 'ml2' },
                  lesson.instructor.full_name
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { style: {
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: _hardCodedSizes.xsmallContainerWidth - 100
        } },
      _react2.default.createElement(_LessonActions2.default, {
        lesson: lesson,
        requestCurrentPage: requestCurrentPage
      })
    )
  );
};