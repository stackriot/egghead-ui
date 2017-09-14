'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lessonStates = require('../../utils/lessonStates');

var _Request = require('../Request');

var _Request2 = _interopRequireDefault(_Request);

var _ViewportWidth = require('../ViewportWidth');

var _ViewportWidth2 = _interopRequireDefault(_ViewportWidth);

var _ContainerWidth = require('../ContainerWidth');

var _ContainerWidth2 = _interopRequireDefault(_ContainerWidth);

var _LessonAction = require('./components/LessonAction');

var _LessonAction2 = _interopRequireDefault(_LessonAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var stateVerbs = (0, _lodash.keys)(_lessonStates.lessonStateVerbToPastTense);

var LessonActions = function LessonActions(_ref) {
  var lesson = _ref.lesson,
      requestLesson = _ref.requestLesson,
      requestCurrentPage = _ref.requestCurrentPage;


  var getItems = function getItems(isLikelyDesktop) {
    return (0, _lodash.compact)([isLikelyDesktop && lesson.upload_lesson_http_url ? _react2.default.createElement(_LessonAction2.default, {
      actionText: lesson.wistia_id ? 'Replace Video' : 'Upload Video',
      iconType: 'upload',
      color: 'blue',
      url: lesson.upload_lesson_http_url
    }) : null, lesson.edit_lesson_http_url ? _react2.default.createElement(_LessonAction2.default, {
      actionText: 'Edit',
      iconType: 'edit',
      color: 'orange',
      url: lesson.edit_lesson_http_url
    }) : null].concat(_toConsumableArray((0, _lodash.map)(stateVerbs, function (stateVerb, index) {
      var stateVerbUrl = lesson[stateVerb + '_url'];
      return stateVerbUrl ? _react2.default.createElement(
        _Request2.default,
        {
          lazy: true,
          method: 'post',
          url: stateVerbUrl,
          onResponse: requestLesson || requestCurrentPage
        },
        function (_ref2) {
          var request = _ref2.request;

          var details = _lessonStates.detailsByLessonState[_lessonStates.lessonStateVerbToPastTense[stateVerb]];
          return _react2.default.createElement(_LessonAction2.default, {
            actionText: details.action,
            iconType: details.icon,
            color: details.color,
            onClick: function onClick() {
              return request();
            }
          });
        }
      ) : null;
    }))));
  };

  return _react2.default.createElement(
    _ViewportWidth2.default,
    null,
    function (isLikelyDesktop) {
      return _react2.default.createElement(
        _ContainerWidth2.default,
        { className: 'h-100' },
        function (containerWidth) {
          return _react2.default.createElement(
            'div',
            { className: '\n              h-100\n              ' + (containerWidth === 'xsmall' ? '' : 'flex flex-wrap justify-end') + '\n            ' },
            (0, _lodash.map)(getItems(isLikelyDesktop), function (item, index) {
              return _react2.default.createElement(
                'div',
                {
                  key: index,
                  className: '\n                    flex\n                    items-center\n                    ' + (containerWidth === 'xsmall' ? index === 0 ? '' : 'bt b--gray-secondary' : index === 0 ? '' : 'bl b--gray-secondary justify-center') + '\n                  ',
                  style: {
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: 90
                  }
                },
                item
              );
            })
          );
        }
      );
    }
  );
};

LessonActions.propTypes = {
  lesson: _react.PropTypes.object.isRequired,
  requestLesson: _react.PropTypes.func,
  requestCurrentPage: _react.PropTypes.func
};

exports.default = LessonActions;