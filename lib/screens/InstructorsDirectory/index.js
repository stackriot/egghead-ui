'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InstructorOverviews = require('./components/InstructorOverviews');

var _InstructorOverviews2 = _interopRequireDefault(_InstructorOverviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstructorsDirectory = function InstructorsDirectory(_ref) {
  var instructorsUrl = _ref.instructorsUrl;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_InstructorOverviews2.default, { instructorsUrl: instructorsUrl })
  );
};

InstructorsDirectory.propTypes = {
  instructorsUrl: _react.PropTypes.string.isRequired
};

exports.default = InstructorsDirectory;