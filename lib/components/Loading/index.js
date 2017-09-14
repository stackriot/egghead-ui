'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n'], ['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation: ', ' 0.7s linear infinite;\n'], ['\n  animation: ', ' 0.7s linear infinite;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate360 = (0, _styledComponents.keyframes)(_templateObject);

var StyledDiv = _styledComponents2.default.div(_templateObject2, rotate360);

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    {
      className: 'flex items-center',
      style: {
        color: 'transparent'
      }
    },
    _react2.default.createElement(
      'div',
      { className: 'mr2' },
      _react2.default.createElement(
        StyledDiv,
        null,
        _react2.default.createElement(_Icon2.default, {
          type: 'progress-ring',
          color: 'transparent'
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'orange' },
      'Loading...'
    )
  );
};

exports.default = Loading;