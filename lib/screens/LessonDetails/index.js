'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _Markdown = require('../../components/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Heading = require('../../components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _List = require('../../components/List');

var _List2 = _interopRequireDefault(_List);

var _Image = require('../../components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _HeaderCard = require('../../components/HeaderCard');

var _HeaderCard2 = _interopRequireDefault(_HeaderCard);

var _LessonActions = require('../../components/LessonActions');

var _LessonActions2 = _interopRequireDefault(_LessonActions);

var _Avatar = require('../../components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _LessonState = require('./components/LessonState');

var _LessonState2 = _interopRequireDefault(_LessonState);

var _WistiaVideo = require('./components/WistiaVideo');

var _WistiaVideo2 = _interopRequireDefault(_WistiaVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LessonDetails = function LessonDetails(_ref) {
  var lesson = _ref.lesson,
      requestLesson = _ref.requestLesson;


  var items = (0, _lodash.compact)([{
    title: 'Video',
    children: _react2.default.createElement(_WistiaVideo2.default, { wistiaId: lesson.wistia_id })
  }, {
    title: 'State',
    children: _react2.default.createElement(_LessonState2.default, { lesson: lesson })
  }, {
    title: 'Actions',
    children: _react2.default.createElement(_LessonActions2.default, {
      lesson: lesson,
      requestLesson: requestLesson
    })
  }, lesson.state === 'requested' ? null : {
    title: 'Instructor',
    children: _react2.default.createElement(
      'div',
      { className: 'flex items-center' },
      _react2.default.createElement(_Avatar2.default, {
        name: lesson.instructor.first_name,
        url: lesson.instructor.avatar_url
      }),
      _react2.default.createElement(
        'div',
        { className: 'ml3' },
        lesson.instructor.full_name
      )
    )
  }, {
    title: 'Technology',
    children: _react2.default.createElement(
      'div',
      { className: 'flex items-center' },
      _react2.default.createElement(_Image2.default, {
        src: lesson.technology.logo_http_url,
        alt: lesson.technology.label,
        className: 'mw3 mr3'
      }),
      lesson.technology.label
    )
  }, {
    title: 'Summary',
    children: _react2.default.createElement(
      _Markdown2.default,
      null,
      lesson.summary
    )
  }]);

  return _react2.default.createElement(
    _HeaderCard2.default,
    { title: lesson.title },
    _react2.default.createElement(_List2.default, { items: (0, _lodash.map)(items, function (item, index) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Heading2.default,
            { level: '4' },
            item.title
          ),
          _react2.default.createElement(
            'div',
            null,
            item.children
          )
        );
      }) })
  );
};

LessonDetails.propTypes = {
  lesson: _react.PropTypes.object.isRequired,
  requestLesson: _react.PropTypes.func.isRequired
};

exports.default = LessonDetails;