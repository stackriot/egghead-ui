'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sharedClassName = 'mt0';

var classNameByType = {
  medium: 'f5',
  small: 'f6'
};

var types = exports.types = (0, _lodash.keys)(classNameByType);

var Paragraph = function Paragraph(_ref) {
  var children = _ref.children,
      type = _ref.type;
  return _react2.default.createElement(
    'p',
    { className: sharedClassName + ' ' + classNameByType[type] },
    children
  );
};

Paragraph.propTypes = {
  children: _react.PropTypes.string.isRequired,
  type: _react.PropTypes.oneOf(types)
};

Paragraph.defaultProps = {
  type: (0, _lodash.first)(types)
};

exports.default = Paragraph;