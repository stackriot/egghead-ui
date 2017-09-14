'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _urls = require('../../utils/urls');

var _instructorMilestones = require('../../utils/instructorMilestones');

var _Maybe = require('../Maybe');

var _Maybe2 = _interopRequireDefault(_Maybe);

var _Tabs = require('../Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _LessonOverviews = require('../LessonOverviews');

var _LessonOverviews2 = _interopRequireDefault(_LessonOverviews);

var _Prompt = require('../Prompt');

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LessonOverviewsByGroup = function LessonOverviewsByGroup(_ref) {
  var lessonsUrl = _ref.lessonsUrl,
      instructor = _ref.instructor;


  var items = (0, _lodash.compact)([{
    title: 'In Progress',
    states: ['accepted', 'claimed', 'rejected'],
    includeLessonsInCourses: true
  }, {
    title: 'In Review',
    description: _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'div',
        null,
        'These lessons are waiting for review to proceed.'
      ),
      _react2.default.createElement(
        _Maybe2.default,
        { condition: Boolean(instructor && (0, _instructorMilestones.hasUnlockedSelfReview)(instructor.published_lessons)) },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            null,
            ' '
          ),
          _react2.default.createElement(
            'span',
            null,
            'Since you have ',
            _instructorMilestones.selfReviewThreshold,
            '+ lessons published, you can review your own lessons.'
          )
        )
      )
    ),
    states: ['proposed', 'submitted', 'updated'],
    includeLessonsInCourses: true
  }, {
    title: 'In Queue',
    description: 'These lessons are in the publishing queue. The queue automatically publishes them from top to bottom. Lessons that are in a course are not shown here because they are held back until the entire course is published.',
    states: ['approved'],
    includeLessonsInCourses: false
  }]);

  return _react2.default.createElement(_Tabs2.default, { groups: [].concat(_toConsumableArray((0, _lodash.map)(items, function (item) {
      return {
        title: item.title,
        component: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Maybe2.default,
            { condition: Boolean(item.description) },
            _react2.default.createElement(
              'div',
              { className: 'pv3 f6' },
              item.description
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mt3' },
            _react2.default.createElement(_LessonOverviews2.default, {
              states: item.states,
              fallback: _react2.default.createElement(_Prompt2.default, {
                description: 'No lessons to show',
                actionText: 'Create a new lesson',
                action: '/lessons/new'
              }),
              lessonsUrl: lessonsUrl,
              includeLessonsInCourses: item.includeLessonsInCourses
            })
          )
        )
      };
    })), [{
      title: 'Published',
      component: _react2.default.createElement(
        'div',
        { className: 'mt3' },
        _react2.default.createElement(_Prompt2.default, {
          description: 'Published lessons and courses are available publicly for students to view on egghead.io.',
          actionText: 'View published content',
          action: _urls.publicLessonsUrl
        })
      )
    }]) });
};

LessonOverviewsByGroup.propTypes = {
  lessonsUrl: _react.PropTypes.string.isRequired,
  instructor: _react.PropTypes.object
};

exports.default = LessonOverviewsByGroup;