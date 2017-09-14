'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../../utils/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconLabel = function IconLabel(_ref) {
  var iconType = _ref.iconType,
      labelText = _ref.labelText,
      color = _ref.color;
  return _react2.default.createElement(
    'div',
    { className: 'flex items-center' },
    _react2.default.createElement(
      'div',
      { className: 'w2' },
      _react2.default.createElement(_Icon2.default, {
        type: iconType,
        color: color
      })
    ),
    _react2.default.createElement(
      'span',
      { className: 'f5 ml1 ' + color },
      labelText
    )
  );
};

IconLabel.propTypes = {
  iconType: _react.PropTypes.oneOf(_Icon.types).isRequired,
  labelText: _react.PropTypes.string.isRequired,
  color: _react.PropTypes.oneOf(_colors2.default)
};

IconLabel.defaultProps = {
  color: 'dark-gray'
};

exports.default = IconLabel;