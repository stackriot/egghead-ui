'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LayoutColumns = require('../../components/LayoutColumns');

var _LayoutColumns2 = _interopRequireDefault(_LayoutColumns);

var _InstructorStats = require('../../components/InstructorStats');

var _InstructorStats2 = _interopRequireDefault(_InstructorStats);

var _InstructorLessons = require('../../components/InstructorLessons');

var _InstructorLessons2 = _interopRequireDefault(_InstructorLessons);

var _InstructorRevenue = require('../../components/InstructorRevenue');

var _InstructorRevenue2 = _interopRequireDefault(_InstructorRevenue);

var _InstructorInfo = require('./components/InstructorInfo');

var _InstructorInfo2 = _interopRequireDefault(_InstructorInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstructorDetails = function InstructorDetails(_ref) {
  var instructor = _ref.instructor;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_LayoutColumns2.default, {
      items: [_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_InstructorInfo2.default, { instructor: instructor })
      ), _react2.default.createElement(_InstructorLessons2.default, { instructor: instructor })],
      relativeSizes: [1, 2]
    }),
    _react2.default.createElement(_LayoutColumns2.default, {
      items: [_react2.default.createElement(_InstructorStats2.default, { instructor: instructor }), _react2.default.createElement(_InstructorRevenue2.default, { revenueUrl: instructor.revenue_url })],
      relativeSizes: [1, 2]
    })
  );
};

InstructorDetails.propTypes = {
  instructor: _react.PropTypes.object
};

exports.default = InstructorDetails;