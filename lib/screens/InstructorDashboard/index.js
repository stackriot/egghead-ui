'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _instructorMilestones = require('../../utils/instructorMilestones');

var _LayoutColumns = require('../../components/LayoutColumns');

var _LayoutColumns2 = _interopRequireDefault(_LayoutColumns);

var _InstructorRevenue = require('../../components/InstructorRevenue');

var _InstructorRevenue2 = _interopRequireDefault(_InstructorRevenue);

var _InstructorStats = require('../../components/InstructorStats');

var _InstructorStats2 = _interopRequireDefault(_InstructorStats);

var _InstructorLessons = require('../../components/InstructorLessons');

var _InstructorLessons2 = _interopRequireDefault(_InstructorLessons);

var _RequestedLessons = require('../../components/RequestedLessons');

var _RequestedLessons2 = _interopRequireDefault(_RequestedLessons);

var _GetPublished = require('./components/GetPublished');

var _GetPublished2 = _interopRequireDefault(_GetPublished);

var _Help = require('./components/Help');

var _Help2 = _interopRequireDefault(_Help);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstructorDashboard = function InstructorDashboard(_ref) {
  var instructor = _ref.instructor,
      lessonsUrl = _ref.lessonsUrl,
      technologiesUrl = _ref.technologiesUrl;
  return (0, _instructorMilestones.hasUnlockedPublished)(instructor.published_lessons) ? _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_LayoutColumns2.default, {
      items: [_react2.default.createElement(_InstructorRevenue2.default, { revenueUrl: instructor.revenue_url }), _react2.default.createElement(_InstructorStats2.default, { instructor: instructor })],
      relativeSizes: [2, 1]
    }),
    _react2.default.createElement(_LayoutColumns2.default, {
      items: [_react2.default.createElement(_InstructorLessons2.default, { instructor: instructor }), _react2.default.createElement(_RequestedLessons2.default, {
        instructor: instructor,
        lessonsUrl: lessonsUrl,
        technologiesUrl: technologiesUrl
      })],
      relativeSizes: [2, 1]
    })
  ) : _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_LayoutColumns2.default, { items: [_react2.default.createElement(_GetPublished2.default, { instructor: instructor }), _react2.default.createElement(_RequestedLessons2.default, {
        instructor: instructor,
        lessonsUrl: lessonsUrl,
        technologiesUrl: technologiesUrl
      }), _react2.default.createElement(_Help2.default, { publishedLessons: instructor.published_lessons })] }),
    _react2.default.createElement(_InstructorLessons2.default, { instructor: instructor })
  );
};

InstructorDashboard.propTypes = {
  instructor: _react.PropTypes.object.isRequired,
  lessonsUrl: _react.PropTypes.string.isRequired,
  technologiesUrl: _react.PropTypes.string.isRequired
};

exports.default = InstructorDashboard;