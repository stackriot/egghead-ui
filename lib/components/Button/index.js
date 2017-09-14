'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  min-width: ', ';\n  padding-left: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n  padding-bottom: ', ';\n  transition: box-shadow 0.3s ease-in-out;\n\n  &:hover,\n  &:active,\n  &:focus {\n    box-shadow: 0px 8px 12px 0px ', ';\n  }\n'], ['\n  min-width: ', ';\n  padding-left: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n  padding-bottom: ', ';\n  transition: box-shadow 0.3s ease-in-out;\n\n  &:hover,\n  &:active,\n  &:focus {\n    box-shadow: 0px 8px 12px 0px ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _hexRgba = require('hex-rgba');

var _hexRgba2 = _interopRequireDefault(_hexRgba);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../utils/colors');

var _colors2 = _interopRequireDefault(_colors);

var _colorValues = require('../../utils/colorValues');

var _colorValues2 = _interopRequireDefault(_colorValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var verticalPaddingBySize = {
  'small': {
    paddingTop: '8px',
    paddingBottom: '8px'
  },
  'medium': {
    paddingTop: '12px',
    paddingBottom: '12px'
  },
  'large': {
    paddingTop: '16px',
    paddingBottom: '16px'
  },
  'xlarge': {
    paddingTop: '20px',
    paddingBottom: '20px'
  }
};

var sizes = exports.sizes = (0, _lodash.keys)(verticalPaddingBySize);

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.size === 'small' ? '0px' : '200px';
}, function (props) {
  return props.size === 'small' ? '24px' : '36px';
}, function (props) {
  return props.size === 'small' ? '24px' : '36px';
}, function (props) {
  return verticalPaddingBySize[props.size].paddingTop;
}, function (props) {
  return verticalPaddingBySize[props.size].paddingBottom;
}, function (props) {
  return (0, _hexRgba2.default)(_colorValues2.default['base-secondary'], props.overDark ? 70 : 20);
});

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      size = _ref.size,
      color = _ref.color,
      outline = _ref.outline,
      overDark = _ref.overDark;
  return _react2.default.createElement(
    StyledButton,
    {
      className: '\n      flex items-center justify-center \n      f6 fw6 ttu b \n      ba br-pill \n      pointer\n      b--' + color + '\n      ' + (outline ? 'bg-transparent ' + color : 'bg-' + color + ' white') + '\n    ',
      onClick: onClick,
      size: size,
      overDark: overDark
    },
    children
  );
};

Button.propTypes = {
  children: _react.PropTypes.node.isRequired,
  onClick: _react.PropTypes.func,
  size: _react.PropTypes.oneOf(sizes),
  color: _react.PropTypes.oneOf(_colors2.default),
  outline: _react.PropTypes.bool,
  overDark: _react.PropTypes.bool
};

Button.defaultProps = {
  size: 'medium',
  color: 'orange',
  outline: false,
  overDark: false
};

exports.default = Button;