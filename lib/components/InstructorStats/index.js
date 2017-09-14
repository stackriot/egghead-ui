'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _lodash = require('lodash');

var _instructorMilestones = require('../../utils/instructorMilestones');

var _createLessonsUrlWithParams = require('../../utils/createLessonsUrlWithParams');

var _createLessonsUrlWithParams2 = _interopRequireDefault(_createLessonsUrlWithParams);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Request = require('../Request');

var _Request2 = _interopRequireDefault(_Request);

var _InstructorStat = require('./components/InstructorStat');

var _InstructorStat2 = _interopRequireDefault(_InstructorStat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstructorStats = function InstructorStats(_ref) {
  var instructor = _ref.instructor;


  if (!(0, _instructorMilestones.hasUnlockedPublished)(instructor.published_lessons)) {
    return null;
  }

  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'pa5' },
      _react2.default.createElement(
        _Request2.default,
        {
          url: (0, _createLessonsUrlWithParams2.default)({
            lessonsUrl: instructor.lessons_url
          })
        },
        function (_ref2) {
          var data = _ref2.data;
          return _react2.default.createElement(_InstructorStat2.default, {
            count: instructor.published_lessons,
            label: (0, _pluralize2.default)('Lesson', instructor.published_lessons),
            graphics: (0, _lodash.uniqBy)((0, _lodash.map)(data, function (lesson) {
              return {
                name: lesson.technology.name,
                graphicUrl: lesson.technology.logo_http_url,
                httpUrl: lesson.technology.http_url
              };
            }), function (technology) {
              return technology.name;
            })
          });
        }
      ),
      (0, _instructorMilestones.hasUnlockedCoursePublished)(instructor.published_courses) ? _react2.default.createElement(
        'div',
        { className: 'mt4' },
        _react2.default.createElement(
          _Request2.default,
          { auth: true, url: instructor.courses_url },
          function (_ref3) {
            var data = _ref3.data;
            return _react2.default.createElement(_InstructorStat2.default, {
              count: instructor.published_courses,
              label: (0, _pluralize2.default)('Course', instructor.published_courses),
              graphics: (0, _lodash.map)(data, function (course) {
                return {
                  name: course.title,
                  graphicUrl: course.square_cover_url,
                  httpUrl: course.http_url
                };
              })
            });
          }
        )
      ) : null
    )
  );
};

InstructorStats.propTypes = {
  instructor: _react.PropTypes.object.isRequired
};

exports.default = InstructorStats;